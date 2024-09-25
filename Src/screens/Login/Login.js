import { styles } from './styles';
import {
    React,
    useState,
    Image,
    ScrollView, Text,
    TouchableOpacity, View, String,
    Redbuttons, images,
    //  CheckBox, 
     GoogleSignin, LoginManager, AccessToken, TextInput,
     useEffect,
     useRef,
} from '../import'
import { login, socialsignup } from '../Apicall';

import { Alert, BackHandler, ToastAndroid } from 'react-native';
export const Login = ({ navigation }) => {
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(true)
    const [isSelected, setSelection] = useState(false);
    const [submit, setsubmit] = useState(false);
     const [isFocused, setIsFocused] = useState(false);
     const [checked, setChecked] = useState(false);
     const [backPressed, setBackPressed] = useState(0);
     const webviewRef = useRef(null);
     useEffect(() => {
        let update = true;
    
        const backAction = () => {
          if (update) {
            if (backPressed > 0) {
              BackHandler.exitApp();
            } else {
              if (webviewRef.current) {
                webviewRef.current.goBack();
                console.log('-------------',webviewRef.current)
              }
              setBackPressed(backPressed + 1);
              ToastAndroid.show("Press back again to exit", ToastAndroid.SHORT);
              setTimeout(() => setBackPressed(0), 1000);
            }
            return true;
          }
        };
    
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
        );
    
        return () => {
          backHandler.remove();
          update = false;
        };
      }, [backPressed]);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleCheckbox = () => {
        setChecked(!checked);
      };

    const googleSignIn = async () => {
        try {
            GoogleSignin.configure({
                webClientId: '64887678796-asemn6jp9dks7e55d37ebav0jvq8bfjd.apps.googleusercontent.com',
                offlineAccess: true,
                debug: true,
            });

            const anyres = await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('userInfo =>> ', userInfo)
            const { user } = userInfo;
            console.log('user =======>>', user)
            setemail(user.email)
            setpass(user.name)
            const Googledata = {
                name: user.name,
                email: user.email,
                authid: user.id,
                img: user.photo,
                device_id: global.tokenId.token
            }
            const Googledataresponse = await socialsignup(global.url + 'socialsignup.php', Googledata);

            console.log('socialsignup API response:--', Googledataresponse);
            if (Googledataresponse.ResponseCode == 1) {
                Alert.alert('Login succesfully')
                navigation.navigate('Home');
            } else {
                Alert.alert('Login Not succesfully')
            }

        } catch (error) {
            console.log('Google Error:', error);
            console.log('error statusCodes =>> ', statusCodes)

        }
    };



    // const handleLogin = async () => {
    //     try {
    //         const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    //         if (result.isCancelled) {
    //             Alert.alert('User cancelled the login process')
    //             console.log('User cancelled the login process');
    //         } else {
    //             const data = await AccessToken.getCurrentAccessToken();
    //             if (data) {
    //                 try {
    //                     const response = await fetch(`https://graph.facebook.com/v13.0/me?fields=email&access_token=${data.accessToken.toString()}`);
    //                     const userData = await response.json();
    //                     setemail(userData.email);
    //                     setpass(userData.name)
    //                     const FBookdata = {
    //                         name: userData.name,
    //                         email: userData.email,
    //                         authid: userData.id,
    //                         img: '',
    //                         device_id: global.tokenId.token
    //                     }
    //                     const FBookdataresponse = await socialsignup(global.url + 'socialsignup.php', FBookdata);

    //                     console.log('socialsignup API response:--', FBookdataresponse);
    //                     if (FBookdataresponse.ResponseCode == 1) {
    //                         Alert.alert('Login succesfully')
    //                         navigation.navigate('Home');
    //                     } else {
    //                         Alert.alert('Login Not succesfully')
    //                     }
    //                 } catch (error) {
    //                     Alert.alert('Error fetching user info:', error);
    //                 }
    //             }
    //         }
    //     } catch (error) {
    //         console.error('Error during Facebook login:', error);
    //     }
    // };
    const handleLogin = async () => {
        try {
            const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
            if (result.isCancelled) {
                Alert.alert('User cancelled the login process');
                console.log('User cancelled the login process');
            } else {
                const data = await AccessToken.getCurrentAccessToken();
                if (data) {
                    try {
                        const response = await fetch(`https://graph.facebook.com/v13.0/me?fields=name,email&access_token=${data.accessToken.toString()}`);
                        const userData = await response.json();
                        setemail(userData.email);
                        setpass(userData.name);
                        const FBookdata = {
                            name: userData.name,
                            email: userData.email,
                            authid: userData.id,
                            img: '',
                            device_id: global.tokenId.token,
                        };
                        const FBookdataresponse = await socialsignup(global.url + 'socialsignup.php', FBookdata);
    
                        console.log('socialsignup API response:--', FBookdataresponse);
                        if (FBookdataresponse.ResponseCode == 1) {
                            // Display a success message and navigate to the Home screen
                            Alert.alert(
                                'Success',
                                'Login successful',
                                [{ text: 'OK', onPress: () => navigation.navigate('Home') }]
                            );
                        } else {
                            Alert.alert('Login not successful');
                        }
                    } catch (error) {
                        Alert.alert('Error fetching user info:', error.message || error.toString());
                    }
                }
            }
        } catch (error) {
            console.error('Error during Facebook login:', error);
            Alert.alert('Error during Facebook login:', error.message || error.toString());
        }
    };
    
    const gotohome = () => {
        setsubmit(true)
        if (email !== '' && pass !== '') {
            const data = {
                username: email,
                password: pass,
                device_id: global.tokenId.token,

            };
            login(global.url + 'login.php', data).then((res) => {
                console.log('res login => ', res)
                if (res.ResponseCode == 1) {
                    navigation.navigate('Home')
                } else {
                    alert(res.ResponseMsg)
                }
            })
        }
    }

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ width: '100%', backgroundColor: 'white' }}>
                <View>
                    <Image resizeMode='stretch' style={styles.fimage} source={images.bari}></Image>
                    <View style={styles.fixedpos}>
                        <Text style={styles.textst}>  {String.Welcome}   </Text>
                        <Image resizeMode='stretch' source={images.cheers}></Image>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={{ height: 20 }}></View>

                    <Text style={[styles.titletext,{color : isFocused ?  '#808080'  : '#808080'}]}>{String.Email}</Text>

                    <View style={styles.passtxt}>
                        <TextInput
                            placeholder={'Enter Email'}
                            placeholderTextColor={isFocused ?  '#808080'  : '#808080'}
                            onChangeText={(email) => setemail(email)}
                            value={email}
                            style={{ width: '90%', color : isFocused ?  '#808080'  : '#808080'}}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                        >
                        </TextInput>
                    </View>
                    {submit && email == '' ?
                        <Text style={styles.errtxt}>Please Enter Email</Text>
                        : null}
                    <View style={{ height: 20 }}></View>

                    <Text style={[styles.titletext,{color : isFocused ?  '#808080'  : '#808080'}]}>{String.Password}</Text>

                    <View style={styles.passtxt}>
                        <TextInput
                            placeholder='Enter Password'
                            placeholderTextColor={isFocused ?  '#808080'  : '#808080'}
                            onChangeText={(pass) => setpass(pass)}
                            value={pass}
                            enablesReturnKeyAutomatically
                            secureTextEntry={passwordVisible}
                            style={{ width: '80%' ,color : isFocused ?  '#808080'  : '#808080'}}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            ></TextInput>
                        <TouchableOpacity style={styles.eyestl}
                            onPress={togglePasswordVisibility}
                        //  onPress={() => { setpasswordVisible(!passwordVisible) }}
                        >
                            {passwordVisible ? (
                                <Image
                                    style={{ width: 22, height: 22, }}
                                    resizeMode='stretch'
                                    source={images.glassproeye}
                                />
                            ) : (
                                <Image
                                    style={{ width: 22, height: 22,  }}
                                    resizeMode='stretch'
                                    source={images.colseeyeglasspro}
                                />
                            )}

                        </TouchableOpacity>
                    </View>
                    {submit && pass == '' ?
                        <Text style={styles.errtxt}>Please Enter Password</Text>
                        : null}
                    <View style={{ height: 20 }}></View>

                    <View style={styles.lastvw}>
                    <TouchableOpacity onPress={toggleCheckbox} style={[styles.checkboxstyle,{height:20,borderWidth:2, justifyContent:'center', borderRadius: 3,borderColor:'#E3EBF2', width:20, marginRight:5}]}>
                         {checked && (
          <Image
          style={{ width: 10, height: 10, alignSelf:'center' }}
            resizeMode="stretch"
            source={images.check}
          />
        )}
                         </TouchableOpacity>
                        {/* <CheckBox boxType={'square'} tintColors={{ true: '#a3a3a3', false: '#E3EBF2', borderRadius: 10 }} style={styles.checkbox} onValueChange={setSelection} value={isSelected} /> */}
                        <View style={{ width: '40%', justifyContent: 'center' }}>
                            <Text style={{color : isFocused ?  '#808080'  : '#808080'}}>{String.Remember}</Text>
                        </View>
                        <TouchableOpacity style={{ width: '50%', justifyContent: 'center' }} onPress={() => navigation.navigate('Forgotpass')}>
                            <Text style={{ textAlign: 'right', color: 'red' }}>{String.ForgotPassword}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 20 }}></View>

                    <Redbuttons
                        title={String.LogIn}
                        onPress={() => gotohome()}
                    />

                    <View style={{ height: 20 }}></View>

                    <View style={styles.lastvw}>
                        <Text style={{color : isFocused ?  '#808080'  : '#808080'}}>{String.Dont}  </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                            <Text style={{ color: 'red' }}>  {String.SignUp}</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ textAlign: 'center', marginTop: 20 ,color : isFocused ?  '#808080'  : '#808080'}}>Or</Text>
                    <View style={styles.lastvw}>
                        <TouchableOpacity style={{ padding: 8 }} onPress={() => handleLogin()}>
                            <Image source={images.facebook}></Image>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={{ padding: 8 }}>
                            <Image source={images.facebook}></Image>
                        </TouchableOpacity> */}
                        <TouchableOpacity style={{ padding: 8 }} onPress={() => googleSignIn()}>
                            <Image source={images.google}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ padding: 8 }}>
                            <Image source={images.iphone}></Image>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}