import { styles } from './styles';
import {
    React,
    useState, useEffect,
    Image,
    ScrollView, Text, Modal,
    TouchableOpacity, View, StatusBar, SafeAreaView,
    Redbuttons, images, AsyncStorage
} from '../import'

import { getfavorite } from '../Apicall';


export const Favourite = ({ navigation }) => {
    const [favoritedata, setfavorite] = useState('')

    useEffect(async () => {
        const result = await AsyncStorage.getItem('owlglasslogin')
        const screenData = JSON.parse(result)
        gotohome(screenData.id)
    }, []);

    const gotohome = async (id) => {
        const data = {
            user_id: id,
        };
        getfavorite(global.url + 'getfavorite.php', data).then((res) => {
            console.log('res getfavorite => ', res)
            if (res.ResponseCode == 1) {
                setfavorite(res.data)
            } else {
                alert(res.ResponseMsg)
            }
        })
    }
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center' }}>
                <View style={{ height: 20 }}></View>

                <TouchableOpacity style={styles.fixedpos} onPress={() => navigation.goBack()}>
                    <View style={{ backgroundColor: '#F0F5FA', width: 40, height: 40, borderRadius: 50 }}>
                        <Image style={{ alignSelf: 'center', marginTop: 12 }} source={images.goBack}></Image>
                    </View>
                    <Text style={{ alignSelf: 'center', color: '#181C2E', fontSize: 17 }}>     Favourite</Text>
                </TouchableOpacity>
                <View style={{ height: 20 }}></View>
                <Text style={{ color: '#9C9BA6', fontSize: 14, fontWeight: '400' }}>Total 03 items</Text>

                <View style={{ height: 20 }}></View>
                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <View style={{ width: '20%' }}>
                        <Image style={{ width: '100%', height: 60, borderRadius: 12 }} source={images.bart}></Image>
                    </View>
                    <View style={{ width: '70%', marginHorizontal: 10 }}>
                        <Text style={{ color: '#32343E', fontSize: 14, fontWeight: 'bold' }}>Skai Bar</Text>
                        <Text style={{ color: '#A0A5BA', fontSize: 12 }}>2 Stamford Road, #70-02 Swissôtel The Stamford, 178882</Text>
                    </View>
                    <View style={{ width: '10%', justifyContent: 'center' }}>
                        <Image style={{ width: 12, height: 12 }} source={images.dil}></Image>
                    </View>
                </View>

                <View style={{ height: 20 }}></View>
                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <View style={{ width: '20%' }}>
                        <Image style={{ width: '100%', height: 60, borderRadius: 12 }} source={images.bart}></Image>
                    </View>
                    <View style={{ width: '70%', marginHorizontal: 10 }}>
                        <Text style={{ color: '#32343E', fontSize: 14, fontWeight: 'bold' }}>Skai Bar</Text>
                        <Text style={{ color: '#A0A5BA', fontSize: 12 }}>2 Stamford Road, #70-02 Swissôtel The Stamford, 178882</Text>
                    </View>
                    <View style={{ width: '10%', justifyContent: 'center' }}>
                        <Image style={{ width: 12, height: 12 }} source={images.dil}></Image>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}