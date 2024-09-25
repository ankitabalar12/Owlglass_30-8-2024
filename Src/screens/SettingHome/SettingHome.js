
import { styles } from './styles';
import {
    React,
    useState, useEffect,
    Image,
    ScrollView, Text, SearchBar,
    TouchableOpacity, View, StatusBar, SafeAreaView, ActivityIndicator, globalstyle,
    Redbuttons, images, AsyncStorage
} from '../import'

import { getvendor, getpramotion } from '../Apicall'

export const SettingHome = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const [isselect, setisselect] = useState(1)
    const [loading, setLoading] = useState(false);
    const [profileimg, setProfile] = useState('');
    const [singleArray, setsingleArray] = useState('')
    const [vender, setvender] = useState()
    const [isFocused, setIsFocused] = useState(false);
    const handleSearch = (text) => {
        setSearch(text)
        console.log('Searching for:', text);
        if (text) {
            const newData = singleArray.filter(function (item) {
                return item.name.toUpperCase().includes(text.toUpperCase())
            });
            setsingleArray(newData)
            console.log('filetr data==>>', newData)
        } else {
            getmaindata()
        }
    };

    useEffect(() => {
        async function fetchData() {
            navigation.addListener('focus', async () => {
                const result = await AsyncStorage.getItem('owlglasslogin')
                const screenData = JSON.parse(result)
                setProfile(screenData.image)
                setsingleArray('')
                global.pramotions = []
                getmaindata()
                setLoading(true)
            })
            // navigation.addListener('focus', () => {
            //     getmaindata()
          
            // })
        } fetchData();
    },
        [])


    const getmaindata = async () => {
        setsingleArray('')
        global.pramotions = []
        const result = await AsyncStorage.getItem('owlglasslogin')
        const screenData = JSON.parse(result)
        const data = {
            user_id: screenData.id,
            category: '',
            speciality: '',
            type: '',
        };
        getvendor(global.url + 'getvendor.php', data).then((res) => {
            // setvender(res.data)
            // getpromotion(0)
            if (res.ResponseCode == 1) {
                setvender(res.data)
                for (var i = 0; i < res.data.length; i++) {
                    getpromotion(0)
                }
            } else {
                alert(res.ResponseMsg)
            }
        })
    }

    const getpromotion = async () => {
        setLoading(true)
        const data = {
            id: '0',
        };
        getpramotion(global.url + 'getpramotion.php', data).then((res) => {
            setsingleArray(res.data)
            console.log('data >>> ',res.data)
             global.pramotions.push(res.data)
            // console.log ('data 22 >>>', data )
            // if (res.ResponseCode == 1) {
                // } else {
                    //     alert(res.ResponseMsg)
                    // }
                    // const singleArray = ([]).concat(...global.pramotion);
                     setLoading(false)
            console.log('res.data--', res.data)
        })
    }

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center' }}>
                <View style={{ height: 20 }}></View>
                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <View style={{ justifyContent: 'center', width: '85%' }}>
                        <Text style={{ fontSize: 18, color: 'black', fontWeight: '700' }}>Hi {global.name}</Text>
                    </View>
                    <TouchableOpacity style={{ width: '15%', justifyContent: 'center' }} onPress={() => navigation.navigate('Profile')}>

                        {profileimg ?
                            <View>
                                <Image source={{ uri: `https://appdevelopmentsingapore.com/owlglass_react/api/${profileimg}` }}
                                    style={{ width: 45, height: 45, borderRadius: 100 }} />
                            </View>
                            :
                            <View>
                                <Image style={{ width: 45, height: 45 }} source={images.man} />
                            </View>
                        }
                    </TouchableOpacity>
                </View>
                <View>
                    <SearchBar onSearch={handleSearch} 
                    styleview={styles.styleview}/>
                </View>

                <View>
                    <Text style={{ color: '#32343E', fontWeight: 'bold', fontSize: 18, marginTop: 20 }}>
                        All Promotions
                    </Text>
                    <View style={{ height: 16 }}></View>
                    {loading ?
                        <View style={globalstyle.spinner}>
                            <ActivityIndicator size="large" color="#1976d2" animating={loading} />
                        </View>
                        : null}
                    {singleArray ?
                        <View>
                            {singleArray.map((p) => (
                                <TouchableOpacity onPress={() => navigation.navigate('ProDetails', p)} style={{ flexDirection: 'row', width: '100%', padding: 6 }}>
                                    <View style={{ width: '20%' }}>
                                        <Image
                                            style={{ width: 70, height: 70, borderRadius: 12,  marginLeft: -6 }}
                                            source={{ uri: `https://appdevelopmentsingapore.com/owlglass_react/admin/${p.image}` }}></Image>
                                    </View>
                                    <View style={{ width: '80%', marginHorizontal: 15, alignSelf: 'center' }}>
                                        <Text style={styles.textapiinshow}>{p.name}</Text>
                                        {/* <Text  style={{ color: isFocused ? '#808080' : '#808080' }}>{p.name}</Text> */}
                                        <Text  style={{ color: isFocused ? '#808080' : '#808080' }}>{p.description}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                        : <View>
                            <Text>
                                Not any Data found
                            </Text>
                        </View>}
                    <View style={{ height: 16 }}></View>

                </View>


                {/* {search.length == 0 ?
                    <View>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18, marginTop: 20 }}>
                            All Promotions
                        </Text>
                        <View style={{ height: 16 }}></View>
                        <View style={{ flexDirection: 'row', width: '100%' }}>
                            <View style={{ width: '20%' }}>
                                <Image style={{ width: '100%', height: 60, borderRadius: 12 }} source={images.bart}></Image>
                            </View>
                            <View style={{ width: '80%', marginHorizontal: 5 }}>
                                <Text>Happy Hour 1 For 1</Text>
                                <Text>Manhatten Bar</Text>
                                <Text>1 Cuscaden Rd, Level 2, Singapore 249715</Text>
                            </View>
                        </View>
                        <View style={{ height: 16 }}></View>
                        <View style={{ flexDirection: 'row', width: '100%' }}>
                            <View style={{ width: '20%' }}>
                                <Image style={{ width: '100%', height: 60, borderRadius: 12 }} source={images.bart}></Image>
                            </View>
                            <View style={{ width: '80%', marginHorizontal: 5 }}>
                                <Text>Happy Hour 1 For 1</Text>
                                <Text>Manhatten Bar</Text>
                                <Text>1 Cuscaden Rd, Level 2, Singapore 249715</Text>
                            </View>
                        </View>
                    </View>
                    :
                    <View>
                        <View style={styles.row}>
                            <Text style={styles.allcat}>Popular Keywords</Text>
                        </View>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.scrollViewContainer}
                        >
                            <TouchableOpacity onPress={() => setisselect(1)}
                                style={isselect == 1 ? styles.item : styles.itemc}>
                                <Text style={isselect == 1 ? styles.txtcl : styles.txtclc}>Beer</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setisselect(2)}
                                style={isselect == 2 ? styles.item : styles.itemc}>
                                <Text style={isselect == 2 ? styles.txtcl : styles.txtclc}>Whisky</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setisselect(3)}
                                style={isselect == 3 ? styles.item : styles.itemc}>
                                <Text style={isselect == 3 ? styles.txtcl : styles.txtclc}>Wine</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setisselect(4)}
                                style={isselect == 4 ? styles.item : styles.itemc}>
                                <Text style={isselect == 4 ? styles.txtcl : styles.txtclc}>Gin</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setisselect(5)}
                                style={isselect == 5 ? styles.item : styles.itemc}>
                                <Text style={isselect == 5 ? styles.txtcl : styles.txtclc}>Vodka</Text>
                            </TouchableOpacity>

                        </ScrollView>

                        <View>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18, marginTop: 20 }}>
                                Results
                            </Text>
                            <View style={{ height: 16 }}></View>
                            <TouchableOpacity style={{ flexDirection: 'row', width: '100%' }} onPress={()=>navigation.navigate('Bardetails')}>
                                <View style={{ width: '20%' }}>
                                    <Image style={{ width: '100%', height: 60, borderRadius: 12 }} source={images.barth}></Image>
                                </View>
                                <View style={{ width: '80%', marginHorizontal: 7, justifyContent: 'center' }}>
                                    <Text style={{ color: '#32343E' }}>Skai Bar</Text>
                                    <Text style={{ color: 'red' }}>Beer . Whisky . Wine . Gin . Vodka . Cocktail ... </Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: 16 }}></View>
                            <TouchableOpacity style={{ flexDirection: 'row', width: '100%' }}>
                                <View style={{ width: '20%' }}>
                                    <Image style={{ width: '100%', height: 60, borderRadius: 12 }} source={images.bart}></Image>
                                </View>
                                <View style={{ width: '80%', marginHorizontal: 7, justifyContent: 'center' }}>
                                    <Text style={{ color: '#32343E' }}>Level Up</Text>
                                    <Text style={{ color: 'red' }}>Beer . Vodka . Gin </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                } */}

            </View>
        </ScrollView>
    )
}