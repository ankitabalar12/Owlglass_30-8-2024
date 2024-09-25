
import { styles } from './styles';
import {
    React,
    useState, useEffect,
    Image,
    ScrollView, Text, Modal,
    TouchableOpacity, View, String,
    Redbuttons, images, AsyncStorage, SearchBar, ActivityIndicator, globalstyle
} from '../import'
import { getcategory, getvendor, getpramotion, getdrinksspeciality, gettypeofplace } from '../Apicall'
import { BackHandler } from 'react-native';

export const Home = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const [isselect, setisselect] = useState(0)
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedDrink, setselectedDrink] = useState([])
    const [savefilter, setsavefilter] = useState(0)
    const [profileimg, setProfile] = useState('');
    const [categori, setcategori] = useState([])
    const [vender, setvender] = useState('')
    const [loading, setLoading] = useState(false);
    const [singleArray, setsingleArray] = useState()
    const [drinksp, setdrinksp] = useState()
    const [drinkplace, setdrinkplace] = useState()
    const [is_addOpenClose, setAddOpenClose] = useState(0);
    const [pramotionfilter, setpramotionfilter] = useState([])
    const [isFocused, setIsFocused] = useState(false);
    const [fullname, setName] = useState('')
    // useEffect(() => {
    //     async function fetchData() {
    //         navigation.addListener('focus', async () => {
    //             const result = await AsyncStorage.getItem('owlglasslogin')
    //             const screenData = JSON.parse(result)
    //             setProfile(screenData.image)
    //             setName(screenData.name)
    //             console.log('name <<<<>> ', screenData.name)
    //             getcat()
    //             // getmaindata()
    //             drinkspc()
    //             typeplace()
    //         })
    //     }
    //      const handleBackButton = () => {
    //         if (isFocused) {
    //             BackHandler.exitApp();
    //             return true;
    //         }
    //         return false;
    //     };
    //     fetchData();
    //     BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    //     return () => BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    //     navigation.addListener('focus', () => {
    //         getmaindata()

    //     })
    // },
    //     [])
    // useEffect(() => {
    //     // Function to fetch data and handle navigation focus
    //     const fetchData = async () => {
    //         const result = await AsyncStorage.getItem('owlglasslogin');
    //         if (result) {
    //             const screenData = JSON.parse(result);
    //             setProfile(screenData.image);
    //             setName(screenData.name);
    //             console.log('name <<<<>> ', screenData.name);
    //         }
    //         const handleBackButton = () => {
    //             if (isFocused) {
    //                 BackHandler.exitApp();
    //                 return true;
    //             }
    //             return false;
    //         };
    //         // Call other functions required during focus
    //         getcat();
    //         drinkspc();
    //         typeplace();
    //         getmaindata();
    //     };

    //     // Focus listener to fetch data when screen is focused
    //     const focusListener = navigation.addListener('focus', fetchData);

    //     // Back button handler


    //     // Add back button event listener
    //     BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    //     // Cleanup listeners on component unmount or when dependencies change
    //     return () => {
    //         BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    //         focusListener(); // Remove the focus listener
    //     };
    // }, [isFocused, navigation]);
    useEffect(() => {
        const fetchData = async () => {
                    const result = await AsyncStorage.getItem('owlglasslogin');
                   if (result) {
                       const screenData = JSON.parse(result);
                        setProfile(screenData.image);
                        console.log('---------------------',screenData.image )
                         setName(screenData.name);
                        console.log('name <<<<>> ', screenData.name);
                   }
                }
        const handleBackButton = () => {
            if (isFocused) {
                BackHandler.exitApp();
                return true;
            }
            return false;
        };
        fetchData();
        getcat();
        drinkspc();
        typeplace();
        getmaindata();
        BackHandler.addEventListener('hardwareBackPress', handleBackButton);
        return () => BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    }, [isFocused]);

    const getcat = () => {
        setLoading(true)
        getcategory(global.url + 'getcategory.php').then((res) => {
            setLoading(false)
            if (res.ResponseCode == 1) {
                setcategori(res.data)
            }
        })
    }

    const drinkspc = () => {
        getdrinksspeciality(global.url + 'getdrinksspeciality.php').then((res) => {
            console.log('getdrinksspeciality => ', res)
            if (res.ResponseCode == 1) {
                setdrinksp(res.data)
            }
        })
    }
    const typeplace = () => {
        gettypeofplace(global.url + 'gettypeofplace.php').then((res) => {
            console.log('gettypeofplace => ', res)

            if (res.ResponseCode == 1) {
                setdrinkplace(res.data)
            }
        })
    }

    const getmainfilterdata = (id) => {
        setLoading(true)
        setisselect(id)
        global.pramotion = []
        setsingleArray('')
        setvender('')
        getmaindata()
    }

    const getmaindata = async () => {
        const result = await AsyncStorage.getItem('owlglasslogin')
        const screenData = JSON.parse(result)
        setLoading(true)
        var selectcat
        if (isselect == 0) {
            selectcat = ''
        } else {
            selectcat = isselect
        }
        global.pramotion = []
        const data = {
            user_id: screenData.id,
            category: selectcat,
            speciality: '',
            type: '',
        };
        getvendor(global.url + 'getvendor.php', data).then((res) => {
            setLoading(false)
            if (res.ResponseCode == 1) {
                setvender(res.data)
                // getpromotion(0)
                console.log('res.data >><<---', res.data)
                for (var i = 0; i < res.data.length; i++) {
                    getpromotion(0)
                    console.log('res.data[i].id >>', res.data[0].images)
                }
            } else {
                alert(res.ResponseMsg)
            }
        })
    }



    // const handleSearch = (text) => {
    //     setSearch(text)
    //     console.log('Searching for:', text);
    //     if (text) {
    //         const newData = vender.filter(function (item) {
    //             return item.name.toUpperCase().includes(text.toUpperCase())
    //         });
    //         if (newData) {
    //             global.pramotion = []
    //             setsingleArray('')
    //             setvender(newData)
    //             console.log('newData >> ', newData)
    //             for (var i = 0; i < newData.length; i++) {
    //                 getpromotion(newData[i].id)
    //             }
    //         }
    //         console.log('filetr data==>>', newData)
    //     } else {
    //         getmaindata()
    //     }
    // };

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleTypeSelection = (type) => {
        if (selectedTypes.includes(type)) {
            setSelectedTypes(selectedTypes.filter((selectedType) => selectedType !== type));
        } else {
            setSelectedTypes([...selectedTypes, type]);
        }
    };
    const handleDrinkSelection = (type) => {
        if (selectedDrink.includes(type)) {
            setselectedDrink(selectedDrink.filter((selectedType) => selectedType !== type));
        } else {
            setselectedDrink([...selectedDrink, type]);
        }
    };

    const clearfun = () => {
        // setModalVisible(false);
        setselectedDrink('')
        setSelectedTypes('')
    }
    const filtersave = async () => {
        const result = await AsyncStorage.getItem('owlglasslogin')
        const screenData = JSON.parse(result)
        setModalVisible(false)
        setvender('')
        global.pramotion = []
        setsingleArray('')
        setLoading(true)
        const data = {
            user_id: screenData.id,
            category: isselect,
            speciality: selectedDrink.toString(),
            type: selectedTypes.toString(),
        };
        console.log('data of vender =>> ', data)
        getvendor(global.url + 'getvendor.php', data).then((res) => {
            console.log('filter of vender data =>> ', res)
            setLoading(false)
            if (res.ResponseCode == 1) {
                setvender(res.data)
                //  getpromotion(0)
                console.log('res.data >><<', res.data)
                // for (var i = 0; i < res.data.length; i++) {
                //     getpromotion(res.data[i].id)
                // }
            } else {
                // alert(res.ResponseMsg)
            }
        })
    }


    const getpromotion = async () => {
        setLoading(true)
        const data = {
            id: '0',
        };
        console.log('data ::', data)
        getpramotion(global.url + 'getpramotion.php', data).then((res) => {
            console.log('res ::', res)
            global.pramotion.push(res.data)
            setsingleArray(res.data);
            console.log('all Pro >>', res.data)
            setLoading(false)
            // if (res.ResponseCode == 1) {
            //      global.pramotion.push(res.data)
            //     setsingleArray(res.data);
            //     setLoading(false)
            //     // console.log('singleArray', res.data);
            //     // const singleArray = [].concat(...global.pramotion);
            //     // setsingleArray(singleArray)
            //     //  console.log('singleArray >> ', singleArray)
            //     // //  const imagesArray = res.data.split(',');

            // } else {
            //     // alert(res.ResponseMsg)
            // }
            // if (res.ResponseCode === 1) {
            //     console.log('singleArray', res.data);
            //     if (res.data) {
            //         global.pramotion.push(res.data);
            //         const singleArray = [].concat(...global.pramotion);
            //         setsingleArray(singleArray);
            //         console.log('singleArray >> ', singleArray);
            //     } else {
            //         console.log('No data available'); 
            //     }
            // } else {
            //     // alert(res.ResponseMsg);
            // }
        })
    }
    const handleOpenClosePress = (isOpen) => {
        if (isOpen === 1) {
            // Handle open action
        } else {
            // Handle close action
        }
    };
    return (
        <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', }}>
                <View style={{ height: 20 }}></View>
                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <View style={{ justifyContent: 'center', width: '85%' }}>
                        <Text style={{
                            fontSize: 24, color: '#1E1D1D',
                            // fontFamily: 'sen'
                            fontWeight: "bold"
                        }}>Hi {fullname}</Text>
                    </View>
                    <TouchableOpacity style={{ width: '15%', justifyContent: 'center' }} onPress={() => navigation.navigate('Profile')}>

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
                        {/* <Image style={{ width: 45, height: 45 }} source={images.man} /> */}
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => { navigation.navigate('Search') }} style={styles.searchview}>
                    <View style={styles.serchflex}>
                        <Image style={[styles.searchburron, { tintColor: isFocused ? '#808080' : '#808080' }]} source={images.magnifying} />
                        <Text style={[styles.searchtextstyle, { color: isFocused ? '#808080' : '#808080' }]}>Search places</Text>
                    </View>
                </TouchableOpacity>


                <View>
                    <View style={styles.row}>
                        <Text style={styles.allcat}>All Categories</Text>
                        <TouchableOpacity style={styles.seal} onPress={() => navigation.navigate('Search')}>
                            <Text style={styles.sellalltextstyles}>See All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={{ alignSelf: 'center', marginTop: 4.5 }} source={images.Vector} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.scrollViewContainer}
                    >
                        {categori ?
                            <View style={{ flexDirection: 'row', alignSelf: 'center', height: 60, marginLeft: 4.5, }}>
                                <TouchableOpacity onPress={() => getmainfilterdata(0)}
                                    style={isselect == 0 ? styles.item : styles.itemc}>
                                    <Text style={isselect == 0 ? styles.txtcl : styles.txtclc}>All</Text>
                                </TouchableOpacity>
                                {categori.map((c) => (
                                    <TouchableOpacity onPress={() => getmainfilterdata(c.id)}
                                        style={isselect == c.id ? styles.item : styles.itemc}>
                                        <Text style={isselect == c.id ? styles.txtcl : styles.txtclc}>{c.name}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                            :
                            <View>
                                <Text>No any Categories</Text>
                            </View>}
                    </ScrollView>
                    <View style={{ height: 20 }}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#32343E', fontWeight: 'bold', fontSize: 20 }}>
                            Browse All
                        </Text>
                        <TouchableOpacity onPress={openModal}>
                            <Image style={styles.filterimg} source={images.filtermenu} />
                        </TouchableOpacity>
                    </View>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={closeModal}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginTop: "3%"
                                }}>
                                    <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginLeft: '2.5%', color: "#32343E", fontFamily: 'sen' }}>Filter</Text>
                                    <TouchableOpacity onPress={closeModal}>
                                        <Image style={{ width: 15, height: 15 }} source={images.close} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ height: 10 }}></View>
                                <Text style={{ marginTop: 4, marginLeft: '2%', fontSize: 15, color: "#32343E", fontFamily: 'sen' }}>Type of Place</Text>
                                <ScrollView
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={styles.scrollViewContainer}
                                >
                                    {drinkplace ?
                                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                            {drinkplace.map((d) => (
                                                <TouchableOpacity onPress={() => handleTypeSelection(d.id)} style={{ padding: 5 }}>
                                                    <Text style={selectedTypes.includes(d.id) ? styles.clertxt : styles.filtertag}>{d.name}</Text>
                                                </TouchableOpacity>
                                            ))}
                                        </View>
                                        :
                                        <View>
                                            <Text>No any place</Text>
                                        </View>}
                                </ScrollView>

                                <View style={{ height: 10 }}></View>
                                <Text style={{ marginTop: 4, marginLeft: '2%', fontSize: 15, color: "#32343E", fontFamily: 'sen' }}>Drinks Speciality</Text>
                                <ScrollView
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={styles.scrollViewContainer}
                                >
                                    {drinksp ?
                                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                            {drinksp.map((d) => (
                                                <TouchableOpacity onPress={() => handleDrinkSelection(d.id)} style={{ padding: 5, }}>
                                                    <Text style={selectedDrink.includes(d.id) ? styles.clertxt : styles.filtertag}>{d.name}</Text>
                                                </TouchableOpacity>

                                            ))}
                                        </View>
                                        :
                                        <View>
                                            <Text>No any Drink</Text>
                                        </View>}
                                </ScrollView>



                                <View style={styles.flexrow}>
                                    <TouchableOpacity style={[styles.buttonsaveandclear,]} onPress={() => clearfun()}>
                                        <Text style={styles.clertxt2}>Clear</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.buttonsaveandclear, styles.buttonsaveandclear2,]} onPress={() => filtersave()}>
                                        <Text style={styles.clertxt2}>Save</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>


                    {loading ?
                        <View style={globalstyle.spinner}>
                            <ActivityIndicator size="large" color="#1976d2" animating={loading} />
                        </View>
                        : null}

                    {vender ?
                        <View>
                            {vender.map((v) => (
                                <View>

                                    <TouchableOpacity style={[styles.imagecs, { borderRadius: 10, marginTop: 15 }]} onPress={() => navigation.navigate('Bardetails', { venderdata: v })}>
                                        <Image
                                            style={[styles.imagecs, { borderRadius: 10, }]}
                                            source={{ uri: `https://appdevelopmentsingapore.com/owlglass_react/admin/${v.images ? v.images.split(',')[0] : null}` }}></Image>

                                        <TouchableOpacity onPress={() => handleOpenClosePress(v.is_open)} style={styles.openstyletaxt}>
                                            <Text style={styles.opentxt}>{v.is_open === 1 ? 'Open' : 'Close'}</Text>
                                        </TouchableOpacity>
                                    </TouchableOpacity>

                                    <Text style={styles.txtvend}>{v.name}</Text>
                                    <Text style={styles.txttwoven}>{v.address}</Text>
                                    <ScrollView
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                        contentContainerStyle={styles.scrollViewContainer}
                                    >
                                        {v.drinks_speciality ?
                                            <View style={{ flexDirection: 'row' }}>
                                                {v.drinks_speciality.map((d) => (
                                                    <TouchableOpacity style={styles.drinktextstyle}>
                                                        <Text style={styles.tag}>{d}</Text>
                                                    </TouchableOpacity>
                                                ))}
                                            </View>
                                            : null}
                                    </ScrollView>
                                </View>

                            ))}
                        </View>
                        :
                        <View>
                            <Text>
                                Not any Data found
                            </Text>
                        </View>}
                </View>

                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18, marginTop: 20 }}>
                    All Promotions
                </Text>
                <View style={{ height: 16 }}></View>
                {singleArray ?
                    <View>
                        {singleArray.map((p, index) => (
                            <View key={index} style={{ flexDirection: 'row', width: '100%', padding: 6 }}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('ProDetails', { apromotiondata: p })}
                                // onPress={() => navigation.navigate('Bardetails', { apromotiondata: p})} 
                                >
                                    <View style={{ width: '20%' }}>
                                        <Image
                                            style={{ width: 70, height: 70, borderRadius: 12 }}
                                            source={{ uri: `https://appdevelopmentsingapore.com/owlglass_react/admin/${p.image}` }}></Image>

                                    </View>
                                </TouchableOpacity>
                                <View style={{ width: '80%', marginHorizontal: 5, alignSelf: 'center' }}>
                                    <Text style={[styles.textapiinshow,]}>{p.name}</Text>
                                    <Text style={{ color: isFocused ? '#808080' : '#808080' }}>{p.description}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                    : <View>
                        <Text>
                            Not any Data found
                        </Text>
                    </View>}
            </View>
            <View style={styles.maringview}></View>
        </ScrollView>
    )
}