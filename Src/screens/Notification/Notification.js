import { styles } from './styles';
import {
    React,
    useState, useEffect,
    Image,
    ScrollView, Text, Modal,
    TouchableOpacity, View, StatusBar, SafeAreaView,
    Redbuttons, images, AsyncStorage
} from '../import'

import { getnotification } from '../Apicall';


export const Notification = ({ navigation }) => {
    const [notificationdata, setnotificationdata] = useState('')
    const [isFocused, setIsFocused] = useState(false);
    useEffect(async () => {
        const result = await AsyncStorage.getItem('owlglasslogin')
        const screenData = JSON.parse(result)
        gotohome(screenData.id)
    }, []);

    const gotohome = async (id) => {
        const data = {
            user_id: id,
        };
        getnotification(global.url + 'getnotification.php', data).then((res) => {
            console.log('res getnotification => ', res)
            if (res.ResponseCode == 1) {
                setnotificationdata(res.data)
            } else {
                alert(res.ResponseMsg)
            }
        })
    }

    const datesfor = (date) => {
        var fordate = date.split(' ')[1]
        return fordate
    }
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center' }}>
                <View style={{ height: 20 }}></View>

                <TouchableOpacity style={styles.fixedpos} onPress={() => navigation.goBack()}>
                    <View style={{ backgroundColor: '#F0F5FA', width: 40, height: 40, borderRadius: 50 }}>
                        <Image style={{ alignSelf: 'center', marginTop: 12 }} source={images.goBack}></Image>
                    </View>
                    <Text style={{ alignSelf: 'center', color: '#181C2E', fontSize: 17 }}>     Notifications</Text>
                </TouchableOpacity>
                <View style={{ height: 20 }}></View>
                {notificationdata ?
                    <View>
                        {notificationdata.map((n) => (
                            <View style={{ flexDirection: 'row', width: '100%', padding: 10 }}>
                                <Text style={[styles.title,{ color: isFocused ? '#808080' : '#808080' }]}>{n.message}</Text>
                                <Text style={[styles.time,{ color: isFocused ? '#808080' : '#808080' }]}>{datesfor(n.created_date)}</Text>
                            </View>
                        ))}
                    </View>
                    :
                    <View>
                        <Text style={[styles.textnoanymore]}>No any notificationdata</Text>
                    </View>}
                <View style={{ height: 20 }}></View>

            </View>
        </ScrollView>
    )
}