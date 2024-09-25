
import { styles } from './styles';
import {
    React,
    useState, useEffect,
    Image,
    ScrollView, Text, SearchBar, Alert,
    TouchableOpacity, View, StatusBar, SafeAreaView, TextInput,
    Redbuttons, images, AsyncStorage, MaskInput, Masks, ImagePicker,
    String
} from '../import'
import { updateprofileuser, imageupload } from '../Apicall'
import { PermissionsAndroid } from 'react-native';

export const Viewprofile = ({ navigation }) => {
    const [email, setemail] = useState('')
    const [name, setname] = useState('')
    const [monu, setmonu] = useState('')
    const [dob, setdob] = useState('')
    const [issubmit, setissubmit] = useState(false);
    const [profileimg, setProfile] = useState('');
    const [isValidDate, setIsValidDate] = useState(false);
    const [isFocused, setIsFocused] = useState(false);


    useEffect(() => {
        async function fetchData() {
            navigation.addListener('focus', async () => {
                const result = await AsyncStorage.getItem('owlglasslogin')
                const screenData = JSON.parse(result)
                console.log('screenData', screenData)
                setemail(screenData.email)
                setname(screenData.name)
                setmonu(screenData.mobile)
                setdob(screenData.dob)
                setProfile(screenData.image)
            })
        } fetchData();
    },
        [])

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

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateMobileNumber = (monu) => {
        const mobileRegex = /^[0-9]{10}$/;
        return mobileRegex.test(monu);
    };

    const gotonav = async () => {
        const result = await AsyncStorage.getItem('owlglasslogin')
        const screenData = JSON.parse(result)
        setissubmit(true)
        if (name !== '' && email !== '' && monu !== '' &&
            dob !== '') {
            const data = {
                user_id: screenData.id,
                name: name,
                email: email,
                image: profileimg,
                dob: dob
            };
            updateprofileuser(global.url + 'updateprofileuser.php', data).then(async (res) => {
                console.log('res updateprofileuser => ', res)
                if (res.ResponseCode == 1) {
                    const updatedUserData = {
                        ...screenData,
                        name: name,
                        name: name,
                        email: email,
                        image: profileimg,
                        dob: dob
                    };
                    console.log('updatedUserData =>> ', updatedUserData)
                    await AsyncStorage.setItem('owlglasslogin', JSON.stringify(updatedUserData));
                    navigation.navigate('Profile')
                } else {
                    alert(res.ResponseMsg)
                }
            })

        }
    }



    function selectimage() {
        Alert.alert("Alert", "Choose an option", [
            {
                text: 'Back',
                onPress: () => { },
            },
            {
                text: 'Camera',
                onPress: () => openCamera(),
            },
            {
                text: 'Library',
                onPress: () => openLibrary()
            },
        ]);
    }
    const requestCameraPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: "Camera Permission",
              message: "App needs access to your camera to take photos.",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK",
            }
          );
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
          console.warn('Permission request error:', err);
          return false;
        }
      };
      


    const openCamera = async () => {
        if (Platform.OS === 'android') {
            const permissionGranted = await requestCameraPermission();
            if (!permissionGranted) {
              Alert.alert('Permission Denied', 'Camera permission is required to take photos.');
              return;
            }
          }
        var options = {
            mediaType: 'photo',
            includeBase64: true,
            quality: 1,
            maxHeight: 500,
            maxWidth: 500,
            cameraType: 'back'
        }
        ImagePicker.launchCamera(options, (response) => {
            if (response.didCancel !== true) {
                let includeBase64 = response.assets[0].base64;
                setProfile(`data:image/jpeg;base64,${includeBase64}`);
                fetch(global.url + 'imageupload.php',
                    {
                        method: 'post',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            base64: 'data:image/jpeg;base64,' + includeBase64
                        }),
                    })
                    .then((res) => res.json())
                    .then((json) => {
                        console.log('json =>> ', json)
                        if (json.ResponseCode == '1') {
                            let userpic = json.image_url;
                            setProfile(userpic)
                        }
                    })
                    .catch((err) => {

                    })

            }
        },
        )
    }


    const openLibrary = () => {
        var options = {
            mediaType: 'photo',
            includeBase64: true,
            quality: 1,
            maxHeight: 500,
            maxWidth: 500,
        }
        ImagePicker.launchImageLibrary(options, response => {
            if (response.didCancel !== true) {
                let includeBase64 = response.assets[0].base64;
                setProfile(includeBase64)
                console.log('includeBase64 ==>> ', includeBase64)

                // fetch(global.url + 'uploadimage',
                //     {
                //         method: 'post',
                //         headers: {
                //             Accept: 'application/json',
                //             'Content-Type': 'application/json',
                //         },
                //         body: JSON.stringify({
                //             base64: 'data:image/jpeg;base64,' + includeBase64
                //         }),
                //     })
                //     .then((res) => res.json())
                //     .then((json) => {
                //         if (json.success == true) {
                //             let userpic = json.data;
                //            setProfile(userpic)
                //         }
                //     })
                //     .catch((err) => {
                //         setLoading(false)
                //     })

            }
        })
    };
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center' }}>
                <View style={{ height: 20 }}></View>

                <TouchableOpacity style={styles.fixedpos} onPress={() => navigation.goBack()}>
                    <View style={{ backgroundColor: '#F0F5FA', width: 40, height: 40, borderRadius: 50 }}>
                        <Image style={{ alignSelf: 'center', marginTop: 12 }} source={images.goBack}></Image>
                    </View>
                    <Text style={{ alignSelf: 'center', color: '#181C2E', fontSize: 17 }}>     Edit Profile</Text>
                </TouchableOpacity>
                <View style={{ height: 20 }}></View>
                <TouchableOpacity onPress={() => selectimage()}>
                    {profileimg ?
                        <View>
                            <Image source={{ uri: `https://appdevelopmentsingapore.com/owlglass_react/api/${profileimg}` }}
                                style={{ alignSelf: 'center', marginTop: 12, height: 90, width: 90, borderRadius: 100 }} />
                        </View>
                        :
                        <View>
                            <View>
                                <Image resizeMode='stretch' style={{ alignSelf: 'center', marginTop: 12, height: 90, width: 100 }} source={images.mannn}></Image>
                            </View>
                            <View style={styles.icon}>
                                <Image resizeMode='stretch' style={{ alignSelf: 'center', width: 15, height: 15 }} source={images.edit}></Image>
                            </View>
                        </View>
                    }
                </TouchableOpacity>


                <View style={styles.box1}>

                    <View style={{ height: 10 }}></View>

                    <Text style={[styles.titletext,{ color: isFocused ? '#808080' : '#808080' }]}>Full Name</Text>
                    <View style={styles.textinputview}>
                        <TextInput
                            placeholder={String.Name}
                            style={{ fontSize: 14, justifyContent: 'center', color:isFocused ?  '#000'  : '#000'  }}
                            placeholderTextColor={isFocused ?  '#808080'  : '#808080'}
                            onChangeText={(name) => setname(name)}
                            value={name}>
                        </TextInput>
                    </View>

                    {issubmit && name == '' ?
                        <Text style={styles.errtxt}>enter name</Text>
                        : null}


                    <Text style={[styles.titletext,{ color: isFocused ? '#808080' : '#808080' }]}>Email</Text>
                    <View style={styles.textinputview}>
                        <TextInput
                            style={{ fontSize: 14, justifyContent: 'center', color:isFocused ?  '#000'  : '#000' }}
                            placeholder={String.Email}
                            placeholderTextColor={isFocused ?  '#808080'  : '#808080'}
                            onChangeText={(email) => setemail(email)}
                            value={email}
                          
                            >
                        </TextInput>
                    </View>

                    {issubmit && (email === '' || !validateEmail(email)) ?
                        <Text style={styles.errtxt}>enter valid email</Text>
                        : null}

                    <Text style={[styles.titletext,{ color: isFocused ? '#808080' : '#808080' }]}>Phone Number</Text>
                    <View style={styles.textinputview}>
                        <TextInput
                            style={{ fontSize: 14, justifyContent: 'center', color:isFocused ?  '#000'  : '#000'  }}
                            placeholder={String.MobileNumber}
                            placeholderTextColor={isFocused ?  '#808080'  : '#808080'}
                            onChangeText={(monu) => setmonu(monu)}
                            value={monu}>
                        </TextInput>
                    </View>

                    {issubmit && (monu === '' || !validateMobileNumber(monu)) ?
                        <Text style={styles.errtxt}>enter valid mobile number</Text>
                        : null}
                    <Text style={[styles.titletext,{ color: isFocused ? '#808080' : '#808080' }]}>Date of birth</Text>
                    <View style={styles.textinputview}>
                        <MaskInput
                            value={dob}
                            onChangeText={maskDate}
                            mask={Masks.DATE_DDMMYYYY}
                            keyboardType="numeric"
                            placeholder='DD / MM / YYYY'
                            placeholderTextColor="#000"
                            style={{ marginLeft: 10, width: '90%', color:isFocused ?  '#000'  : '#000'  }}
                        />
                    </View>
                    {/* {!isValidDate && dob != '' ? <Text style={{ color: 'red' }}>Invalid date</Text> : null} */}

                    {issubmit && dob === '' ?
                        <Text style={styles.errtxt}>Please Enter a valid Date of Birth (DD / MM / YYYY)</Text>
                        : null}
                    <View style={{ height: 20 }}></View>

                    <TouchableOpacity style={{ width: '90%', alignSelf: 'center', marginTop: 15 }} onPress={() => setresubmit(1)}>
                        <Redbuttons
                            title='Save'
                            onPress={() => gotonav()}
                        />
                    </TouchableOpacity>

                    <View style={{ height: 20 }}></View>

                </View>
            </View>
        </ScrollView>
    )
}