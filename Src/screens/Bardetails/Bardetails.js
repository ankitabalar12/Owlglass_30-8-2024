
import { getpramotion, reservation } from '../Apicall';
import { styles } from './styles';
import {
    React,
    useState,
    Image,
    Swiper,

    ScrollView, Text, Modal, useEffect,
    TouchableOpacity, View, String,
    Redbuttons, images, AsyncStorage, Inputbox, Linking, globalstyle, ActivityIndicator, StatusBar,
    TextInput,
} from '../import'
import DatePicker from 'react-native-date-picker'
import { addremovefavorite, myreservation } from '../Apicall';
export const Bardetails = ({ navigation, route, onSelectTime, onSelectDate }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [email, setemail] = useState('')
    const [name, setname] = useState('')
    const [monu, setmonu] = useState('')
    const [pax, setpax] = useState(0)
    const [dob, setdob] = useState(new Date())
    // const [time, settime] = useState('')
    const [remark, setremark] = useState('')
    const [promo, setpromo] = useState('')
    const [resubmit, setresubmit] = useState(0)
    const [issubmit, setissubmit] = useState(false)
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [currentTime, setCurrentTime] = useState(new Date());
    const [loading, setLoading] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [showPromotions, setShowPromotions] = useState(true);
    const [promotiondataall, setpromotiondataall] = useState()
    const [liked, setLiked] = useState(false);
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [openDate, setOpenDate] = useState(false);
    const [openTime, setOpenTime] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [mobail, setMobail] = useState('')
    const venderdata = route?.params
    const bardetail = route.params
    const apromotiondata = route?.params
    const formattedDate = selectedDate ? selectedDate.toISOString().split('T')[0] : null;

    // {selectedTime && selectedTime.toLocaleTimeString()}
    const formattedTime = selectedTime ? selectedTime.toLocaleTimeString() : null;
    useEffect(() => {
        async function fetchData() {
            navigation.addListener('focus', async () => {
                const result = await AsyncStorage.getItem('owlglasslogin')
                const screenData = JSON.parse(result)
                // setProfile(screenData.image)
                setname(screenData.name)
                console.log('screenData.name-------', screenData.name)
                setemail(screenData.email)
                console.log('screenData.email---------', screenData.email)
                setmonu(screenData.mobile)
                console.log('screenData.mobile-----------', screenData.mobile)
                console.log('name >> ', screenData.name)
                const venderdata = route?.params
                if (venderdata) {
                    getpromotion(venderdata.venderdata.id)
                    //console.log('venderdata --> ', venderdata.venderdata.id)
                }



            })
        }
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
            setCurrentTime(new Date());
        }, 1000); // Update every second
        navigation.addListener('focus', () => {
            // myadsCurrentDate();

        })
        fetchData();
        return () => clearInterval(interval);

    }, []);

    useEffect(() => {
        getreservation()
    }, []);

    const toggleLike = () => {
        setLiked(!liked);
    };


    // const hours = currentTime.getHours();
    // const minutes = currentTime.getMinutes();
    // const seconds = currentTime.getSeconds();
    // const formattedTime = `${hours}:${minutes}:${seconds}`;
    // const formattedDateTime = currentDateTime.toDateString(); // Format the date and time


    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const validateEmail = (email) => {
        // Email validation regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateMobileNumber = (monu) => {
        // Mobile number validation regular expression
        const mobileRegex = /^[0-9]{10}$/;
        return mobileRegex.test(monu);
    };
    const validateDOB = (dob) => {
        const dobRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
        return dobRegex.test(dob);
    };
    const closeModalnext = async () => {
        const result = await AsyncStorage.getItem('owlglasslogin')
        const screenData = JSON.parse(result)
        console.log('screenData', screenData)
        setissubmit(true)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (
            name !== '' &&
            email !== '' && emailPattern.test(email) &&
            monu !== '' &&
            pax !== '' &&
            remark !== '' &&
            screenData && screenData.id
        ) {
            const data = {
                user_id: screenData.id,
                name: name,
                email: email,
                phone: monu,
                bar_id: venderdata.venderdata.id,
                rdate: formattedDate,
                rtime: formattedTime,
                number_of_pax: pax,
                remark: remark,
                promotion: promo
            };
            console.log('alldata >> ', data)
            console.log('date >> ', data.rdate)
            console.log('Time >> ', data.rtime)
            reservation(global.url + 'reservation.php', data).then(res => {
                console.log('res for reservation =>> ', res)
                if (res.ResponseCode == '1') {
                    setModalVisible(false);
                    // console.log(' allfromdata >>',res.data )
                    setresubmit(1)
                } else {
                    alert(res.ResponseMsg)
                }
            })
        }
    };

    const favrit = async () => {
        setLoading(true)
        const result = await AsyncStorage.getItem('owlglasslogin')
        const screenData = JSON.parse(result)
        const data = {
            user_id: screenData.id,
            id: venderdata.venderdata.id
        };
        console.log('addremovefavorite =>> ', data)
        addremovefavorite(global.url + 'addremovefavorite.php', data).then((res) => {
            setLoading(false)
            console.log('addremovefavrite =>>', res)
            if (res.ResponseCode == 1) {
                // alert(res.ResponseMsg)
            }
        })
    }

    const getreservation = async () => {
        setLoading(true)
        const result = await AsyncStorage.getItem('owlglasslogin')
        const screenData = JSON.parse(result)
        const data = {
            user_id: screenData.id
        };
        console.log('myreservation =>> ', data)
        myreservation(global.url + 'myreservation.php', data).then((res) => {
            setLoading(false)
            console.log('myreservation =>>', res)
            console.log('promotions >> ', res.data[0].promotion);

            // if (res.ResponseCode == 1) {
            //     alert(res.ResponseMsg)
            // } else {
            //     alert(res.ResponseMsg)
            // }
        })
    }

    const getpromotion = async (id) => {
        setLoading(true)
        const data = {
            id: id,
        };
        console.log('data <>', data)
        getpramotion(global.url + 'getpramotion.php', data).then((res) => {
            setLoading(false)
            if (res.ResponseCode == 1) {
                console.log('singleArray', res.data);
                setpromotiondataall(res.data)
                console.log('res.data --', res.data)
            } else {
                alert(res.ResponseMsg)
            }

        })
    }

    const handleLinkPress = (reservationLink) => {
        Linking.openURL(reservationLink)
            .then(() => console.log('Opening reservation link:', reservationLink))
            .catch((error) => console.error('Failed to open reservation link:', error));
    };

    const handleDateChange = (selectedDate) => {
        setOpenDate(false);
        setDate(selectedDate);
        if (onSelectDate) {
            onSelectDate(selectedDate);
        }
        setSelectedDate(selectedDate);
    };

    const handleTimeChange = (selectedTime) => {
        setOpenTime(false);
        setTime(selectedTime);
        if (onSelectTime) {
            onSelectTime(selectedTime);
        }
        setSelectedTime(selectedTime);
    };

    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle="light-content" style="auto" translucent={true} />
            <View style={styles.mainview}>
                {/* <View style={styles.heightview}>
                    <Image
                        style={styles.fimage}
                        source={{ uri: `https://appdevelopmentsingapore.com/owlglass_react/admin/${apromotiondata?.apromotiondata?.image || bardetail?.image || venderdata?.venderdata?.images}` }}></Image>
                    <View style={styles.fixedpos}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={images.Back}></Image>
                        </TouchableOpacity>
                        {resubmit === 0 ? (
                            <TouchableOpacity onPress={favrit}>
                                <Image source={images.Save} />
                            </TouchableOpacity>
                        ) : null}
                    </View>
                </View> */}
                {/* <View>
                    <Swiper
                        style={styles.wrapper}
                        showsButtons={true}
                        showsPagination={true} // Enable pagination
                        dot={<View style={styles.dot} />}
                        activeDot={<View style={[styles.dot, styles.activeDot]} />}
                    >
                        <View style={styles.heightview}>
                            <Image
                                style={styles.fimage}
                                source={{ uri: `https://appdevelopmentsingapore.com/owlglass_react/admin/${apromotiondata?.apromotiondata?.image || bardetail?.image || venderdata?.venderdata?.images ? venderdata?.venderdata?.images.split(',')[0] : null}}` }}></Image>
                            <View style={styles.fixedpos}>
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <Image source={images.Back}></Image>
                                </TouchableOpacity>
                                {resubmit === 0 ? (
                                    <TouchableOpacity onPress={favrit}>
                                        <Image source={images.Save} />
                                    </TouchableOpacity>
                                ) : null}
                            </View>
                        </View>
                    </Swiper>
                </View> */}
                <View style={styles.mainview}>
                    {/* Conditionally render one image or Swiper */}
                    {venderdata?.venderdata?.images && venderdata.venderdata.images.split(',').length > 1 ? (
                        <View style={styles.heightview}>

                            <Swiper
                                style={styles.wrapper}
                                loop={false}
                                showsPagination={{}}
                                dot={<View style={styles.dot} />}
                                activeDot={<View style={[styles.dot, styles.activeDot]} />}
                            >
                                {venderdata.venderdata.images.split(',').map((imageUrl, index) => (
                                    <View key={index} style={styles.heightview}>
                                        <Image
                                            style={styles.fimage}
                                            source={{
                                                uri: `https://appdevelopmentsingapore.com/owlglass_react/admin/${imageUrl}`
                                            }}
                                        />
                                        <View style={styles.fixedpos}>
                                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                                <Image source={images.Back} />
                                            </TouchableOpacity>
                                            {resubmit === 0 ? (
                                                <TouchableOpacity onPress={favrit}>
                                                    <Image source={images.Save} />
                                                </TouchableOpacity>
                                            ) : null}
                                        </View>
                                    </View>
                                ))}
                            </Swiper>
                        </View>
                    ) : (
                        // Render single image when there's only one image available
                        <View style={styles.heightview}>
                            <Image
                                style={styles.fimage}
                                source={{
                                    uri: `https://appdevelopmentsingapore.com/owlglass_react/admin/${(venderdata?.venderdata?.images ? venderdata.venderdata.images.split(',')[0] : '')
                                        }`
                                }}
                            />
                            <View style={styles.fixedpos}>
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <Image source={images.Back} />
                                </TouchableOpacity>
                                {resubmit === 0 ? (
                                    <TouchableOpacity style={styles.hertview} onPress={() => {
                                        favrit();
                                        toggleLike()
                                    }}>
                                        <Image style={styles.hertimages} source={liked ? images.heartfild : images.hertlineimg} />
                                    </TouchableOpacity>
                                ) : null}
                            </View>
                        </View>
                    )}
                </View>

                {loading ?
                    <View style={globalstyle.spinner}>
                        <ActivityIndicator size="large" color="#1976d2" animating={loading} />
                    </View>
                    : null}
                <View style={styles.texttopmarstyle}>
                    <Text style={styles.title}>{venderdata?.venderdata?.name}</Text>
                    <Text style={styles.detail}>{venderdata?.venderdata?.address}</Text>

                    {resubmit == 0 ?
                        <View>
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={styles.scrollViewContainer}>
                                <View style={styles.flexrowtowd}>
                                    {venderdata?.venderdata?.drinks_speciality.map((drink, index) => (
                                        <View key={index} style={[styles.tag]}>
                                            <Text style={styles.textdrink}>{drink}</Text>
                                        </View>
                                    ))}
                                </View>
                            </ScrollView>
                            <Text style={[styles.resubmittxt, styles.resubmittxterewr, { color: isFocused ? '#808080' : '#808080' }]}>{venderdata?.venderdata?.description}</Text>
                            {showPromotions ? (
                                <View>
                                    <Text style={styles.title}>{String.ContactDetails}</Text>
                                    <Text style={styles.txtallstyle}>{venderdata?.venderdata?.name}</Text>
                                    <Text style={styles.addrestextall}>{venderdata?.venderdata?.email}</Text>
                                    <Text style={styles.addrestextall}>{venderdata?.venderdata?.mobile}</Text>
                                    <TouchableOpacity onPress={() => handleLinkPress(venderdata?.venderdata?.reservation)}>
                                        <Text style={[styles.addrestextall, { textDecorationLine: 'underline' }]}>Click here to reserve</Text>
                                    </TouchableOpacity>
                                </View>
                            ) : null}
                            {!showPromotions ? (
                                <View>
                                    <Text style={[styles.title, styles.title2df]}>Promotions</Text>
                                    <Text style={[styles.resubmittxt, styles.resubmittxt, { color: isFocused ? '#808080' : '#808080' }]}>Promotions can only be enjoyed if you reserved through us.</Text>
                                    {/* <View style={{ flexDirection: 'row', flexWrap: 'wrap' , backgroundColor:'red',marginTop: 10,alignSelf:"center", marginLeft: -0 }}> */}
                                    {promotiondataall ? (
                                        <View>
                                            <View style={[styles.flexroestyletwo, {
                                                flexDirection: 'row',
                                                //  backgroundColor:'yellow',
                                                marginTop: 10,
                                                //  justifyContent: 'center',
                                                //  alignSelf:"center",
                                                flexWrap: 'wrap'
                                            }]}>
                                                {promotiondataall.map((item, index) => (
                                                    <TouchableOpacity key={index} onPress={() => navigation.navigate('ProDetails', { selectedimg: item })} style={[styles.flexroestyletwo, { flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }]}>

                                                        {item.image ? (
                                                            <Image
                                                                style={[styles.reportimg]}
                                                                source={{ uri: `https://appdevelopmentsingapore.com/owlglass_react/admin/${item.image}` }}
                                                            />
                                                        ) : (
                                                            <Text style={{ color: isFocused ? '#808080' : '#808080' }}>No image available</Text>
                                                        )}
                                                    </TouchableOpacity>
                                                ))}
                                            </View>
                                        </View>
                                    ) : (
                                        <View>
                                            <Text style={[styles.promotiontexstyle, { color: isFocused ? '#808080' : '#808080' }]}>No promotions available</Text>
                                        </View>
                                    )}






                                    {/* </View> */}

                                </View>
                            ) : null}





                            <View style={styles.box}>
                                <TouchableOpacity
                                    //  onPress={() => getpromotion()}
                                    // onPress={() => getpromotion()}
                                    onPress={() => setShowPromotions(!showPromotions)}
                                    style={styles.boxstyleview}>
                                    <View style={styles.lastbox}>
                                        <Text style={styles.lasttxt}>{String.Promotions}</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.boxstyleview} onPress={() => openModal()}>
                                    <View style={styles.lastbox1}>
                                        <Text style={styles.lasttxt1}>{String.Reservation}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={closeModal} >
                                <View style={styles.modalContainer}>
                                    <View style={styles.modalContent}>
                                        <View style={styles.flwxrowthree}>
                                            <Text style={[styles.mtitle, { color: isFocused ? '#32343E' : '#32343E', marginLeft: -2 }]}>{String.Reservation}</Text>
                                            <TouchableOpacity onPress={closeModal}>
                                                <Image style={styles.closeimg} source={images.close} />
                                            </TouchableOpacity>
                                        </View>
                                        <ScrollView
                                            showsVerticalScrollIndicator={false}
                                            contentContainerStyle={styles.scrollContainer}>
                                            <View style={styles.box1}>
                                                <Text style={[styles.titletext, { color: isFocused ? '#808080' : '#808080' }]}>{String.please}</Text>
                                                <View style={{ height: 10 }}></View>
                                                <Text style={[styles.titletext, { color: isFocused ? '#808080' : '#808080' }]}>{String.Name}*</Text>
                                                {/* <Inputbox
                                                    placeholder={String.Name}
                                                    placeholderTextColor={'#808080'}
                                                    onChangeText={(name) => setname(name)}
                                                    value={name}
                                                    styleview={styles.styleview}
                                                /> */}
                                                <View style={styles.textinputview}>
                                                    <TextInput
                                                        placeholder={String.Name}
                                                        style={{ fontSize: 14, justifyContent: 'center', color: isFocused ? '#000' : '#000' }}
                                                        placeholderTextColor={isFocused ? '#808080' : '#808080'}
                                                        onChangeText={(name) => setname(name)}
                                                        value={name}>
                                                    </TextInput>
                                                </View>

                                                {issubmit && name == '' ? <Text style={styles.errtxt}>{String.entername}</Text> : null}
                                                <Text style={[styles.titletext, { color: isFocused ? '#808080' : '#808080' }]}>{String.Email}*</Text>
                                                {/* <Inputbox
                                                    placeholder={String.Email}
                                                    placeholderTextColor={'#808080'}
                                                    onChangeText={(email) => setemail(email)}
                                                    value={email}
                                                /> */}
                                                <View style={styles.textinputview}>
                                                    <TextInput
                                                        style={{ fontSize: 14, justifyContent: 'center', color: isFocused ? '#000' : '#000' }}
                                                        placeholder={String.Email}
                                                        placeholderTextColor={isFocused ? '#808080' : '#808080'}
                                                        onChangeText={(email) => setemail(email)}
                                                        value={email}

                                                    ></TextInput>
                                                </View>
                                                {issubmit && (email === '' || !validateEmail(email)) ?
                                                    <Text style={styles.errtxt}>{String.enentervalidemail}</Text>
                                                    : null}

                                                <Text style={[styles.titletext, { color: isFocused ? '#808080' : '#808080' }]}>{String.MobileNumber}*</Text>
                                                {/* <Inputbox
                                                    placeholder={String.MobileNumber}
                                                    placeholderTextColor={'#808080'}
                                                    onChangeText={(monu) => setmonu(monu)}
                                                    maxLength={10}
                                                    value={monu}
                                                /> */}
                                                <View style={styles.textinputview}>
                                                    <TextInput
                                                        style={{ fontSize: 14, justifyContent: 'center', color: isFocused ? '#000' : '#000' }}
                                                        placeholder={String.MobileNumber}
                                                        placeholderTextColor={isFocused ? '#808080' : '#808080'}
                                                        onChangeText={(monu) => setmonu(monu)}
                                                        value={monu}>
                                                    </TextInput>
                                                </View>
                                                {issubmit && (monu === '' || !validateMobileNumber(monu)) ?
                                                    <Text style={styles.errtxt}>{String.entervalidmobile}</Text>
                                                    : null}


                                                <Text style={[styles.titletext, { color: isFocused ? '#808080' : '#808080' }]}>N.o of Pax*</Text>
                                                <Inputbox
                                                    onChangeText={(pax) => setpax(pax)}
                                                    value={pax}
                                                />
                                                {issubmit && pax == '' ?
                                                    <Text style={styles.errtxt}>{String.enterPax}</Text>
                                                    : null}
                                                <View style={styles.dataview}>
                                                    {openDate && (
                                                        <DatePicker
                                                            modal
                                                            open={openDate}
                                                            date={date}
                                                            mode="date"
                                                            onConfirm={handleDateChange}
                                                            onCancel={() => setOpenDate(false)}
                                                        />
                                                    )}
                                                    <TouchableOpacity onPress={() => setOpenDate(true)} style={{ width: '50%' }}>
                                                        <Text style={[styles.titletext, styles.titletext2, { color: isFocused ? '#808080' : '#808080' }]}>Date*</Text>
                                                        <View style={styles.boxdate}>
                                                            <>
                                                                {selectedDate ? (
                                                                    <Text style={{ color: isFocused ? '#808080' : '#808080' }}>{selectedDate.toLocaleDateString()}</Text>
                                                                ) : (
                                                                    <Text style={{ color: isFocused ? '#808080' : '#808080' }}>Select Date</Text>
                                                                )}
                                                            </>

                                                        </View>

                                                    </TouchableOpacity>
                                                    {openTime && (
                                                        <DatePicker
                                                            modal
                                                            open={openTime}
                                                            date={time}
                                                            mode="time"
                                                            onConfirm={handleTimeChange}
                                                            onCancel={() => setOpenTime(false)}
                                                        />
                                                    )}
                                                    <TouchableOpacity onPress={() => setOpenTime(true)} style={{ width: '50%' }}>
                                                        <Text style={[styles.titletext, { color: isFocused ? '#808080' : '#808080' }]}>Time*</Text>
                                                        <View style={styles.boxdate}>
                                                            {/* <Text style={{ color: isFocused ? '#808080' : '#808080' }}>{selectedTime && selectedTime.toLocaleTimeString()}</Text> */}
                                                            <>
                                                                {selectedTime ? (
                                                                    <Text style={{ color: isFocused ? '#808080' : '#808080' }}>{selectedTime && selectedTime.toLocaleTimeString()}</Text>
                                                                ) : (
                                                                    <Text style={{ color: isFocused ? '#808080' : '#808080' }}>Select Time</Text>
                                                                )}
                                                            </>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>

                                                {/* <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'center', alignSelf: 'center' }}>
                                                        <View style={{ width: '50%' }}>
                                                            {issubmit && (dob === '' || !validateDOB(dob)) ?
                                                                <Text style={styles.errtxt}>enter Date</Text>
                                                                : null}
                                                        </View>
                                                        <View style={{ width: '50%' }}>
                                                            {issubmit && time == '' ?
                                                                <Text style={styles.errtxt}>enter Time</Text>
                                                                : null}
                                                        </View>
                                                    </View> */}

                                                <Text style={[styles.titletext, { color: isFocused ? '#808080' : '#808080' }]}>{String.PromoReference}</Text>
                                                <Inputbox
                                                    placeholder='E.g.'
                                                    placeholderTextColor={'#808080'}
                                                    onChangeText={(val) => setpromo(val)}
                                                    value={promo}
                                                />
                                                {issubmit && remark == '' ?
                                                    <Text style={styles.errtxt}>{String.enterremark}</Text>
                                                    : null}

                                                <Text style={[styles.titletext, { color: isFocused ? '#808080' : '#808080' }]}>{String.Remarks}</Text>
                                                <Inputbox
                                                    placeholder='E.g.'
                                                    placeholderTextColor={'#808080'}
                                                    onChangeText={(remark) => setremark(remark)}
                                                    value={remark}
                                                />
                                                {issubmit && remark == '' ?
                                                    <Text style={styles.errtxt}>{String.enterremark}</Text>
                                                    : null}



                                                <TouchableOpacity style={{ width: '50%', alignSelf: 'center', marginTop: 15 }} onPress={() => setresubmit(1)}>
                                                    <Redbuttons
                                                        title={String.SUBMIT}
                                                        onPress={() => closeModalnext()}
                                                    />
                                                </TouchableOpacity>

                                                <View style={{ height: 20 }}></View>

                                            </View>
                                        </ScrollView>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                        :
                        <View>
                            <Text style={[styles.title, styles.title2df]}>Promotions</Text>
                            <Text style={[styles.resubmittxt, styles.resubmittxt]}>{venderdata?.venderdata?.description}</Text>
                            <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: -0 }}>
                                {promotiondataall ? (
                                    <View>
                                        {promotiondataall.map((item, index) => (
                                            <TouchableOpacity
                                                key={index}
                                                style={{ width: '50%', flexDirection: 'row', justifyContent: 'space-between' }}
                                                onPress={() => navigation.navigate('ProDetails', { selectedimg: item })}
                                            >
                                                {/* {item.image ? ( */}
                                                <Image
                                                    resizeMode='cover'
                                                    style={styles.reportimg}
                                                    source={{ uri: `https://appdevelopmentsingapore.com/owlglass_react/admin/${item.image}` }}
                                                />
                                                {/* ) : ( */}
                                                {/* <Image
                                                                resizeMode='cover'
                                                                style={styles.reportimg}
                                                                source={{ uri: `https://appdevelopmentsingapore.com/owlglass_react/admin/${item.image}` }}
                                                            /> */}
                                                {/* )} */}
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                ) : (
                                    <View>
                                        <Text style={[styles.promotiontexstyle, { color: isFocused ? '#808080' : '#808080' }]}>No promotions available</Text>
                                    </View>
                                )}

                            </View>
                        </View>
                    }
                </View>
            </View>
            <View style={styles.mainviewmargin}></View>
        </ScrollView>
    )
}