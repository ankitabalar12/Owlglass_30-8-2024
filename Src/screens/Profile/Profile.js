
import { styles } from './styles';
import {
    React,
    useState, useEffect,
    Image,
    ScrollView, Text, Modal,
    TouchableOpacity, View, resetNavigateTo, AsyncStorage, TextInput, Alert,
    Redbuttons, images,
} from '../import'
import { accountdelete } from '../Apicall'

export const Profile = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [profileimg, setProfile] = useState('');
    const [fullname, setName] = useState('')
    const [emailid, setEmail] = useState('')
    useEffect(() => {
        async function fetchData() {
            navigation.addListener('focus', async () => {
                const result = await AsyncStorage.getItem('owlglasslogin')
                const screenData = JSON.parse(result)
                console.log(screenData)
                setProfile(screenData.image)
                setName(screenData.name)
                console.log(screenData.name)
                setEmail(screenData.email)
                console.log(screenData.email)
            })
        } fetchData();
    },
        [])

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    const Deleteacc = async () => {
        const result = await AsyncStorage.getItem('owlglasslogin')
        const screenData = JSON.parse(result)
        const data = {
            user_id: screenData.id,
        };
        accountdelete(global.url + 'accountdelete.php', data).then((res) => {
            console.log('res accountdelete => ', res)
            if (res.ResponseCode == 1) {
                setModalVisible(false);
                AsyncStorage.removeItem('owlglasslogin')
                resetNavigateTo(navigation, 'Login');
            } else {
                alert(res.ResponseMsg)
            }
        })
    }
    const logout = () => {
        AsyncStorage.removeItem('owlglasslogin')
        resetNavigateTo(navigation, 'Login');
    }


    function poplogout() {
        Alert.alert("Alert", "Are you sure you would like to logout?", [
            {
                text: 'Yes',
                onPress: () => { logout() },
            },
            {
                text: 'No',
                onPress: () => { },
            },

        ]);
    }

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center' }}>
                <View style={{ height: 20 }}></View>

                <TouchableOpacity style={styles.fixedpos} onPress={() => navigation.goBack()}>
                    <View style={{ backgroundColor: '#F0F5FA', width: 40, height: 40, borderRadius: 50 }}>
                        <Image style={{ alignSelf: 'center', marginTop: 12 }} source={images.goBack}></Image>
                    </View>
                    <Text style={{ alignSelf: 'center', color: '#181C2E', fontSize: 17 }}>     Profile</Text>
                </TouchableOpacity>
                <View style={{ height: 20 }}></View>
                <View style={styles.fixedpos}>
                    <View style={{ width: '20%' }}>
                        {profileimg ?
                            <View>
                                <Image source={{ uri: `https://appdevelopmentsingapore.com/owlglass_react/api/${profileimg}` }}
                                    style={{ width: 45, height: 45, borderRadius: 100 }} />
                            </View>
                            :
                            <View>
                                <Image style={{ width: 45, height: 45 }} source={images.mannn} />
                            </View>
                        }
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>   {fullname}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 12, color: 'gray' }}>    {emailid}</Text>
                        {/* <Text>    {global.email}</Text> */}
                    </View>

                </View>
                <View style={{ height: 20 }}></View>
                <View style={styles.mainbox}>
                    <TouchableOpacity style={styles.menucon} onPress={() => navigation.navigate('Viewprofile')}>
                        <View style={styles.innerbox}>
                            <Image resizeMode='stretch' style={styles.logoimg} source={images.pers}></Image>
                        </View>
                        <View style={styles.txtbox}>
                            <Text style={styles.fnts}>    Edit Profile</Text>
                        </View>
                        <View style={{ width: '15%', justifyContent: 'center' }}>
                            <Image resizeMode='stretch' style={styles.logogoimg} source={images.Vector}></Image>
                        </View>
                    </TouchableOpacity>
                    <View style={{ height: 20 }}></View>
                    <TouchableOpacity style={styles.menucon} onPress={() => navigation.navigate('Favourite')}>
                        <View style={styles.innerbox}>
                            <Image resizeMode='stretch' style={styles.logoimg} source={images.heart}></Image>
                        </View>
                        <View style={styles.txtbox}>
                            <Text style={styles.fnts}>    Favourite</Text>
                        </View>
                        <View style={{ width: '15%', justifyContent: 'center', alignSelf: 'center' }}>
                            <Image resizeMode='stretch' style={styles.logogoimg} source={images.Vector}></Image>
                        </View>
                    </TouchableOpacity>
                    <View style={{ height: 20 }}></View>
                    <TouchableOpacity style={styles.menucon} onPress={() => navigation.navigate('Notification')}>

                        <View style={styles.innerbox}>
                            <Image resizeMode='stretch' style={styles.logoimg} source={images.noti}></Image>
                        </View>
                        <View style={styles.txtbox}>
                            <Text style={styles.fnts}>    Notifications</Text>
                        </View>
                        <View style={{ width: '15%', justifyContent: 'center', alignSelf: 'center' }}>
                            <Image resizeMode='stretch' style={styles.logogoimg} source={images.Vector}></Image>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 20 }}></View>
                <View style={{ backgroundColor: '#F6F8FA', padding: 12, borderRadius: 15, width: '100%' }}>
                    <TouchableOpacity style={styles.menucon} onPress={() => navigation.navigate('Faqs')}>

                        <View style={styles.innerbox}>
                            <Image resizeMode='stretch' style={styles.logoimg} source={images.faq}></Image>
                        </View>
                        <View style={styles.txtbox}>
                            <Text style={styles.fnts}>    FAQs</Text>
                        </View>
                        <View style={{ width: '15%', justifyContent: 'center', alignSelf: 'center' }}>
                            <Image resizeMode='stretch' style={styles.logogoimg} source={images.Vector}></Image>
                        </View>
                    </TouchableOpacity>
                    <View style={{ height: 20 }}></View>
                    <TouchableOpacity style={styles.menucon} onPress={() => navigation.navigate('Feedback')}>

                        <View style={styles.innerbox}>
                            <Image resizeMode='stretch' style={styles.logoimg} source={images.feedback}></Image>
                        </View>
                        <View style={styles.txtbox}>
                            <Text style={styles.fnts}>    Feedback</Text>
                        </View>
                        <View style={{ width: '15%', justifyContent: 'center', alignSelf: 'center' }}>
                            <Image resizeMode='stretch' style={styles.logogoimg} source={images.Vector}></Image>
                        </View>
                    </TouchableOpacity>
                    <View style={{ height: 20 }}></View>
                    <View style={styles.menucon}>
                        <View style={styles.innerbox}>
                            <Image resizeMode='stretch' style={styles.logoimg} source={images.seeting}></Image>
                        </View>
                        <View style={styles.txtbox}>
                            <Text style={styles.fnts}>    Terms & Conditions</Text>
                        </View>
                        <View style={{ width: '15%', justifyContent: 'center', alignSelf: 'center' }}>
                            <Image resizeMode='stretch' style={styles.logogoimg} source={images.Vector}></Image>
                        </View>
                    </View>
                </View>

                <View style={{ height: 20 }}></View>
                <View style={{ backgroundColor: '#F6F8FA', padding: 12, borderRadius: 15, width: '100%' }}>
                    <TouchableOpacity style={styles.menucon} onPress={() => openModal()}>
                        <View style={styles.innerbox}>
                            <Image resizeMode='stretch' style={styles.closimg} source={images.close}></Image>
                        </View>
                        <View style={styles.txtbox}>
                            <Text style={styles.fnts}>    Account Deletion</Text>
                        </View>
                        <View style={{ width: '15%', justifyContent: 'center', alignSelf: 'center' }}>
                            <Image resizeMode='stretch' style={styles.logogoimg} source={images.Vector}></Image>
                        </View>
                    </TouchableOpacity>
                    <View style={{ height: 20 }}></View>
                    <TouchableOpacity style={styles.menucon} onPress={() => poplogout()}>
                        <View style={styles.innerbox}>
                            <Image resizeMode='stretch' style={styles.logoimg} source={images.Logout}></Image>
                        </View>
                        <View style={styles.txtbox}>
                            <Text style={styles.fnts}>    Log Out</Text>
                        </View>
                        <View style={{ width: '15%', justifyContent: 'center', alignSelf: 'center' }}>
                            <Image resizeMode='stretch' style={styles.logogoimg} source={images.Vector}></Image>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.mtxt}>Account Deletion</Text>
                        <Text style={styles.mftxt}>Are you sure you would like to delete your account? Once deleted, all account related details will be permanently removed and this action is non-reversable. </Text>
                        <View style={{ height: 20 }}></View>
                        <View style={styles.box}>
                            <TouchableOpacity style={{ width: '47%' }} onPress={() => closeModal()}>
                                <View style={styles.lastbox}>
                                    <Text style={styles.lasttxt}>Back</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{ width: '6%' }}></View>
                            <TouchableOpacity style={{ width: '47%' }} onPress={() => Deleteacc()}>
                                <View style={styles.lastbox1}>
                                    <Text style={styles.lasttxt1}>Delete</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

        </ScrollView>
    )
}