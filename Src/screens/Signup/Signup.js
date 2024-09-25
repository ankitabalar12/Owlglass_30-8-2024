
import { signup } from '../Apicall';
import { styles } from './styles';
import {
    React,
    useState, useEffect,
    Image, String, Inputbox, CheckBox,
    ScrollView, Text, SearchBar,
    TouchableOpacity, View, StatusBar, SafeAreaView,
    Redbuttons, images, AsyncStorage, MaskInput, Masks, TextInput, Alert
} from '../import'
import { Linking } from 'react-native';


export const Signup = ({ navigation }) => {
    const [email, setemail] = useState('')
    const [name, setname] = useState('')
    const [monu, setmonu] = useState('')
    const [pass, setpass] = useState('')
    const [isFocused, setIsFocused] = useState(false);
    const [passwordVisible, setpasswordVisible] = useState(true)
    const [repasswordVisible, setrepasswordVisible] = useState(true)
    const [repass, setrepass] = useState('')
    const [dob, setdob] = useState('')
    const [isSelected, setSelection] = useState(false);
    const [submit, setsubmit] = useState(false);
    const [isValidDate, setIsValidDate] = useState(false);
    const [checked, setChecked] = useState(false);
    const validateEmail = (email) => {
        // Email validation regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const toggleCheckbox = () => {
        setChecked(!checked);
    };
    // const validateMobileNumber = (monu) => {
    //     // Mobile number validation regular expression
    //     const mobileRegex = /^[0-9]{10}$/;
    //     return mobileRegex.test(monu);
    // };
    const validateDOB = (dob) => {
        // DOB validation regular expression for DD / MM / YYYY format
        const dobRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
        return dobRegex.test(dob);
    };
    const maskDate = (masked) => {
        setdob(masked); // Update the state with the masked value

        const dateParts = masked.split('/');
        const day = dateParts[0];
        const month = dateParts[1];
        const year = dateParts[2];

        let isValid = true;

        if (month < 1 || month > 12) {
            isValid = false;
        } else {
            switch (parseInt(month, 10)) {
                case 2:
                    isValid = day >= 1 && day <= 28;
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    isValid = day >= 1 && day <= 30;
                    break;
                default:
                    isValid = day >= 1 && day <= 31;
                    break;
            }
        }

        console.log('isValid =>>', isValid);
        setIsValidDate(isValid);

        if (isValid) {
            const formattedDate = `${day}/${month}/${year}`;
            console.log('Formatted Date =>>', formattedDate);

            // Update the state or perform any other necessary actions with the formattedDate.
            // For example:
            // setFormattedDate(formattedDate);
        }
    };

    // const gotohome = () => {
    //     setsubmit(true)
    //     if (name !== '' && email !== '' && monu !== '' &&
    //         pass !== '' && pass == repass && dob !== '') {
    //         const data = {
    //             name: name,
    //             email: email,
    //             mobile: monu,
    //             password: pass,
    //             dob: dob,
    //             password: pass,
    //         };
    //         signup(global.url + 'signup.php', data).then(res => {
    //             console.log('res for signup =>> ', res)
    //             if (res.ResponseCode == '1') {
    //                 // navigation.navigate('Home')
    //                 navigation.navigate('Login')
    //             } else {
    //                 Alert.alert(res.ResponseMsg)
    //             }
    //         })
    //     } else {
    //         // Alert.alert('', 'Please check terms and conditions.')
    //     }
    // }
    const gotohome = () => {
        setsubmit(true);
        if (
            name !== '' &&
            email !== '' &&
            monu !== '' &&
            pass !== '' &&
            pass === repass &&
            dob !== ''
        ) {
            const data = {
                name: name,
                email: email,
                mobile: monu,
                password: pass,
                dob: dob,
            };
            signup(global.url + 'signup.php', data).then(res => {
                console.log('res for signup =>> ', res);
                if (res.ResponseCode == '1') {
                    // Show success message and navigate to the login screen
                    Alert.alert(
                        'Success',
                        'Registration successful',
                        [{ text: 'OK', onPress: () => navigation.navigate('Login') }]
                    );
                } else {
                    Alert.alert(res.ResponseMsg);
                }
            });
        } else {
            // Alert.alert('', 'Please check terms and conditions.')
        }
    };
    
 const handleLinkPress = (pdfFile) => {
        // Construct the full URL for the PDF file
        const pdfview = `https://appdevelopmentsingapore.com/owlglass_react/api/` + pdfFile;

        console.log('pdfview =>> ', pdfview);

        // Attempt to open the URL
        Linking.openURL(pdfview)
            .then(() => {
                console.log('Opening PDF:', pdfFile);
            })
            .catch((error) => {
                console.error('Failed to open PDF:', error);
            });
    };

    return (

        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ width: '100%', backgroundColor: 'white', }}>
                <View style={{ height: 220 }}>
                    <Image resizeMode='stretch' style={styles.fimage} source={images.bari}></Image>
                    <TouchableOpacity style={styles.fixedpos} onPress={() => navigation.goBack()}>
                        <Image source={images.Back}></Image>
                    </TouchableOpacity>
                    <Text style={[styles.textst, styles.fixedtxtpos]}>  {String.SignUp}   </Text>

                </View>
                <View style={styles.box}>
                    <View style={{ height: 20 }}></View>
                    <Text style={[styles.titletext,{color : isFocused ?  '#808080'  : '#808080'}]}>{String.Name}</Text>
                    <Inputbox
                        placeholder={String.Name}
                        placeholderTextColor={isFocused ? '#808080' : '#808080'}
                        onChangeText={(name) => setname(name)}
                        value={name}
                    // styleview={styles.styleview}
                    />
                    {submit && name == '' ?
                        <Text style={styles.errtxt}>Please Enter Name</Text>
                        : null}
                    <View style={{ height: 20 }}></View>

                    <Text style={[styles.titletext,{color : isFocused ?  '#808080'  : '#808080'}]}>{String.Email}</Text>
                    <Inputbox
                        placeholder={String.Email}
                        placeholderTextColor={isFocused ? '#808080' : '#808080'}
                        onChangeText={(email) => setemail(email)}
                        value={email}
                    // styleview={styles.styleview}
                    />
                    {/* {submit && (email === '' || !validateEmail(email)) ?
                        <Text style={styles.errtxt}>Please Enter a valid Email</Text>
                        : null} */}
                         {submit && email == '' ?
                        <Text style={styles.errtxt}>Please Enter Email</Text>
                        : null}
                    <View style={{ height: 20 }}></View>

                    <Text style={[styles.titletext,{color : isFocused ?  '#808080'  : '#808080'}]}>{String.MobileNumber}</Text>
                    <Inputbox
                        placeholder={String.MobileNumber}
                        placeholderTextColor={isFocused ? '#808080' : '#808080'}
                        onChangeText={(monu) => setmonu(monu)}
                        maxLength={8}
                        value={monu}
                    // styleview={styles.styleview}
                    />
                    {/* {submit && (monu == '' || !validateMobileNumber(monu)) ?
                        <Text style={styles.errtxt}>Please Enter  a valid MobileNumber</Text>
                        : null} */}
                         {submit && monu == '' ?
                        <Text style={styles.errtxt}>Please Enter Mobile Number</Text>
                        : null}
                    <View style={{ height: 20 }}></View>

                    <Text style={[styles.titletext,{color : isFocused ?  '#808080'  : '#808080'}]}>{String.Password}</Text>
                    <View style={styles.passtxt}>
                        <TextInput
                            placeholder={String.Password}
                            placeholderTextColor={isFocused ? '#808080' : '#808080'}
                            onChangeText={(pass) => setpass(pass)}
                            value={pass}
                            enablesReturnKeyAutomatically
                            secureTextEntry={passwordVisible}
                            style={{ width: '90%', color: isFocused ? '#808080' : '#808080' }}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                        >

                        </TextInput>
                        {passwordVisible == true ?
                            <TouchableOpacity style={styles.eyestl} onPress={() => { setpasswordVisible(!passwordVisible) }}>
                                <Image style={{ width: 22, height: 22 }} resizeMode='stretch' source={images.glassproeye}></Image>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={styles.eyestl} onPress={() => { setpasswordVisible(!passwordVisible) }}>
                                <Image style={{ width: 22, height: 22 }} resizeMode='stretch' source={images.colseeyeglasspro}></Image>
                            </TouchableOpacity>
                        }
                    </View>
                    {submit && pass == '' ?
                        <Text style={styles.errtxt}>Please Enter Password</Text>
                        : null}
                    <View style={{ height: 20 }}></View>

                    <Text style={[styles.titletext,{color : isFocused ?  '#808080'  : '#808080'}]}>{String.ReType}</Text>
                    <View style={styles.passtxt}>
                        <TextInput placeholder={String.ReType}
                            onChangeText={(repass) => setrepass(repass)}
                            value={repass}
                            placeholderTextColor={isFocused ? '#808080' : '#808080'}
                            enablesReturnKeyAutomatically
                            secureTextEntry={repasswordVisible}
                            style={{ width: '90%',width: '90%', color: isFocused ? '#808080' : '#808080' }}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}>
                        </TextInput>
                        {repasswordVisible == true ?
                            <TouchableOpacity style={styles.eyestl} onPress={() => { setrepasswordVisible(!repasswordVisible) }}>
                                <Image style={{ width: 22, height: 22 }} resizeMode='stretch' source={images.glassproeye}></Image>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={styles.eyestl} onPress={() => { setrepasswordVisible(!repasswordVisible) }}>
                                <Image style={{ width: 22, height: 22 }} resizeMode='stretch' source={images.colseeyeglasspro}></Image>
                            </TouchableOpacity>
                        }
                    </View>
                    {submit && repass == '' ?
                        <Text style={styles.errtxt}>Please Enter Re-Password</Text>
                        :
                        <View>
                            {pass != repass && repass != '' ?
                                <Text style={styles.errtxt}>Not match Password and Re-Password</Text>
                                : null}
                        </View>
                    }
                    <View style={{ height: 20 }}></View>
                    <Text style={[styles.titletext,{color : isFocused ?  '#808080'  : '#808080'}]}>{String.DOB}</Text>
                    {/* <Inputbox
                        placeholder='DD / MM / YYYY'
                        placeholderTextColor={'#808080'}
                        onChangeText={(dob) => setdob(dob)}
                        value={dob}
                    /> */}
                    <View style={styles.textinputview}>
                        <MaskInput
                            value={dob}
                            onChangeText={maskDate}
                            mask={Masks.DATE_DDMMYYYY}
                            keyboardType="numeric"
                            placeholder='DD / MM / YYYY'
                            placeholderTextColor="#808080"
                            style={{ marginLeft: 10, width: '90%', color: isFocused ? '#808080' : '#808080' }}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                        />
                    </View>
                    {submit && dob === '' ?
                        <Text style={styles.errtxt}>Please Enter a valid Date of Birth (DD / MM / YYYY)</Text>
                        : null}
                    <View style={{ height: 20 }}></View>

                    <View style={styles.checkboxContainer}>
                        <TouchableOpacity onPress={toggleCheckbox} style={[styles.checkboxstyle, { height: 20, borderWidth: 2, justifyContent: 'center', borderRadius: 3,borderColor:'#E3EBF2', width: 20,
                             marginRight: 5
                              }]}>
                            {checked && (
                                <Image
                                    style={{ width: 10, height: 10, alignSelf: 'center', }}
                                    resizeMode="stretch"
                                    source={images.check}
                                />
                            )}
                        </TouchableOpacity>
                      
                        {/* <CheckBox boxType={'square'} tintColors={{ true: '#a3a3a3', false: '#E3EBF2', borderRadius: 10 }} style={styles.checkbox} onValueChange={setSelection} value={isSelected} /> */}
                        {/* <View style={{ width: '90%'}}> */}
                                 <Text style={{ fontSize: 13, color : isFocused ?  '#808080'  : '#808080'} }>By signing up, you agree to the </Text>
                                   <TouchableOpacity onPress={() => handleLinkPress()} >
                                    <Text style={{ textDecorationLine: 'underline', color: 'red', fontSize: 12 }}>Terms & </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handleLinkPress()} >
                                     <Text style={{ textDecorationLine: 'underline', color: 'red',  fontSize: 12}}>conditions</Text>
                                     </TouchableOpacity>
                        {/* </View> */}
                    </View>
                    {/* {submit && isSelected == false ?
                        <Text style={[styles.errtxt,{color : isFocused ?  '#808080'  : '#808080'}]}>Please select Terms & conditions</Text>
                        : null} */}
                    <View style={{ height: 20 }}></View>

                    <Redbuttons
                        title={String.SignUp}
                        onPress={() => gotohome()}
                    />
                    <View style={{ height: 20 }}></View>

                </View>
            </View>
        </ScrollView>

    )
}