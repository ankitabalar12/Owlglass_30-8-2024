
import { styles } from './styles';
import {
    React,
    useState,
    Image,
    ScrollView, Text, useEffect,
    TouchableOpacity, View, String,
    Redbuttons, images, AsyncStorage, Inputbox
} from '../import'
import { changepassworduser } from '../Apicall';

export const Forgotpass = ({ navigation }) => {
    const [pass, setpass] = useState('')
    const [submit, setsubmit] = useState(0)
    const [issubmit, setissubmit] = useState(false)
    const [isFocused, setIsFocused] = useState(false);
    useEffect(async () => {
        const result = await AsyncStorage.getItem('owlglasslogin')
        const screenData = JSON.parse(result)
     
    }, []);
    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };
    const donefor = async () => {

        setissubmit(true)
        setsubmit(1)
        // const result = await AsyncStorage.getItem('owlglasslogin')
        // const screenData = JSON.parse(result)
        // if (pass !== '') {
        //     const data = {
        //         user_id: screenData.id,
        //         new_password:pass
        //     };
        //     changepassworduser(global.url + 'changepassworduser.php', data).then((res) => {
        //         console.log('res changepassworduser => ', res)
        //         if (res.ResponseCode == 1) {
                  
        //         } else {
        //             alert(res.ResponseMsg)
        //         }
        //     })
        // }
    }

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ width: '100%', backgroundColor: 'white', }}>
                <View style={{ height: 220 }}>
                    <Image resizeMode='stretch' style={styles.fimage} source={images.bart}></Image>
                    <TouchableOpacity style={styles.fixedpos} onPress={() => navigation.goBack()}>
                        <Image source={images.Back}></Image>
                    </TouchableOpacity>
                    <Text style={[styles.textst, styles.fixedtxtpos]}>  {String.ForgotPassword}   </Text>

                </View>
                <View style={styles.box}>
                    <View style={{ height: 20 }}></View>
                    {submit == 0 ?
                        <View>
                            <Text style={[styles.titletext,{color : isFocused ?  '#808080'  : '#808080'}]}>{String.Password}</Text>
                            <Inputbox
                                placeholder={String.Password}
                                placeholderTextColor={isFocused ? '#808080' : '#808080'}
                                onChangeText={(email) => setpass(email)}
                                value={pass}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                            {issubmit && pass === '' ?
                                <Text style={styles.errtxt}>Please Enter Your RE-password</Text>
                                : null}
                            <View style={{ height: 20 }}></View>
                            <Redbuttons
                                title={String.SUBMIT}
                                onPress={() => donefor()} />
                            <View style={{ height: 20 }}></View>
                        </View>
                        :
                        <View>
                            <Text style={[styles.txtreset]}>{String.reset} </Text>
                            <View style={{ height: 20 }}></View>
                            <Redbuttons
                                title={String.BACKTOLOGIN}
                                onPress={() => navigation.navigate('Login')}
                            />
                        </View>
                    }

                </View>
            </View>
        </ScrollView>
    )
}