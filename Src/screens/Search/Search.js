
import { styles } from './styles';
import {
    React,
    useState, useEffect,
    Image,
    ScrollView, Text, SearchBar,
    TouchableOpacity, View, StatusBar, SafeAreaView,
    globalstyle, images, AsyncStorage,
    ActivityIndicator
} from '../import'
import { getvendor } from '../Apicall';

export const Search = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const [isselect, setisselect] = useState(0)
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [vender, setVendors] = useState([]);
    const [is_selectedSearch, setIsSelectedSearch] = useState(false);
    const [is_selectedserchtext, setIs_selectedSerchText] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            navigation.addListener('focus', async () => {
                const result = await AsyncStorage.getItem('owlglasslogin');
                const screenData = JSON.parse(result);

                console.log('name >> ', screenData.name);
                getMainData();
            });
        };

        fetchData();


        return () => {
            navigation.removeListener('focus');
        };
    }, []);

    const getMainData = async () => {
        const result = await AsyncStorage.getItem('owlglasslogin')
        const screenData = JSON.parse(result)
        setLoading(true)

        const data = {
            user_id: screenData.id,
            category: '',
            speciality: '',
            type: '',
        };
        getvendor(global.url + 'getvendor.php', data).then((res) => {
            setLoading(false)
            if (res.ResponseCode == 1) {
                setVendors(res.data)
                console.log('res.data >><<---', res.data)

            } else {
                alert(res.ResponseMsg)
            }
        })
    }
    const handleSearch = async (text) => {
        setSearchQuery(text);
        // setisselect(id);
        console.log('text >> ', text)
        setIsSelectedSearch(true);
        console.log('vender >>>', vender)

        if (text) {
            const newData = vender.filter(function (item) {
                const itemName = item.name ? item.name.toUpperCase() : "";
                const itemAddress = item.address ? item.address.toUpperCase() : "";
                const itemSpeciality = item.drinks_speciality_name ? item.drinks_speciality_name.toUpperCase() : "";
                const searchText = text.toUpperCase();
                if (itemName.indexOf(searchText) === -1) {

                    if (itemAddress.indexOf(searchText) !== -1) {
                        return true;
                    }
                }
                if (itemSpeciality.indexOf(searchText) !== -1) {
                    return true;
                }
                return itemName.indexOf(searchText) !== -1;
            });
            console.log('newData>>', newData);
            setFilteredData(newData);

        } else {
            setFilteredData([]);
            setIsSelectedSearch(false);
            await getMainData();
        }
    };

    const handleOpenClosePress = (isOpen) => {
        if (isOpen === 1) {

        } else {
            // Handle close action
        }
    };
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center' }}>
                <View style={{ height: 20 }}></View>

                <TouchableOpacity style={styles.fixedpos} onPress={() => navigation.goBack()}>
                    <View style={{ backgroundColor: '#F0F5FA', width: 40, height: 40, borderRadius: 50 }}>
                        <Image style={{ alignSelf: 'center', marginTop: 12 }} source={images.goBack}></Image>
                    </View>
                    <Text style={{ alignSelf: 'center', color: '#181C2E', fontSize: 17 }}>     Search</Text>
                </TouchableOpacity>
                <View>
                    <SearchBar
                        styleSearch={styles.styleSearch}
                        onSearch={handleSearch}
                        onChangeText={setSearchQuery}
                        value={searchQuery}
                        val={is_selectedserchtext}
                    // onPress={handlePress}
                    />
                </View>
                <View>
                    <View style={styles.row}>
                        <Text style={styles.allcat}>Popular Keywords</Text>
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.scrollViewContainer}
                    >
                        <TouchableOpacity onPress={() => {
                            setisselect(1, 'Beer');
                            setIs_selectedSerchText('Beer');
                            handleSearch('Beer')
                        }}
                            style={isselect == 1 ? styles.item : styles.itemc}>
                            <Text style={isselect == 1 ? styles.txtcl : styles.txtclc}>Beer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setisselect(2, 'Whisky');
                            setIs_selectedSerchText('Whisky');
                            handleSearch('Whisky')

                        }}
                            style={isselect == 2 ? styles.item : styles.itemc}>
                            <Text style={isselect == 2 ? styles.txtcl : styles.txtclc}>Whisky</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setisselect(3, 'Wine');
                            setIs_selectedSerchText('Wine');
                            handleSearch('Wine')
                        }}
                            style={isselect == 3 ? styles.item : styles.itemc}>
                            <Text style={isselect == 3 ? styles.txtcl : styles.txtclc}>Wine</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setisselect(4, 'Gin');
                            setIs_selectedSerchText('Gin');
                            handleSearch('Gin')
                        }}
                            style={isselect == 4 ? styles.item : styles.itemc}>
                            <Text style={isselect == 4 ? styles.txtcl : styles.txtclc}>Gin</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setisselect(5, 'Vodka');
                            setIs_selectedSerchText('Vodka');
                            handleSearch('Vodka')
                        }}
                            style={isselect == 5 ? styles.item : styles.itemc}>
                            <Text style={isselect == 5 ? styles.txtcl : styles.txtclc}>Vodka</Text>
                        </TouchableOpacity>

                    </ScrollView>

                    <View>
                        {filteredData.length > 0 ? (
                            filteredData.map((v, index) => (
                                <View key={index}>
                                    <TouchableOpacity style={[styles.imagecs, { borderRadius: 10, marginTop: 15 }]} onPress={() => navigation.navigate('Bardetails', { venderdata: v })}>
                                        <Image
                                            style={[styles.imagecs, { borderRadius: 10, }]}
                                            source={{ uri: `https://appdevelopmentsingapore.com/owlglass_react/admin/${v.images ? v.images.split(',')[0] : null}` }}></Image>

                                        <TouchableOpacity onPress={() => handleOpenClosePress(v.is_open)} style={styles.positionstyles}>
                                            <Text style={styles.opentextstyle}>{v.is_open === 1 ? 'Open' : 'Close'}</Text>
                                        </TouchableOpacity>
                                    </TouchableOpacity>

                                    <Text style={styles.txtvend}>{v.name}</Text>
                                    <Text style={styles.txttwoven}>{v.address}</Text>
                                    <ScrollView
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                        contentContainerStyle={styles.scrollViewContainer}
                                    >
                                        {v.drinks_speciality ? (
                                            <View style={{ flexDirection: 'row' }}>
                                                {v.drinks_speciality.map((d, innerIndex) => (
                                                    <TouchableOpacity key={innerIndex} style={styles.drinktextstyle}>
                                                        <Text style={styles.tag}>{d}</Text>
                                                    </TouchableOpacity>
                                                ))}
                                            </View>
                                        ) : null}
                                    </ScrollView>
                                </View>
                            ))
                        ) : (
                            <View>
                                <Text>No results</Text>
                            </View>
                        )}
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}