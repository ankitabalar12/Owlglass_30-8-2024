
import { styles } from './styles';
import {
    React,
    useState, useEffect,
    Image,
    ScrollView, Text, Modal,
    TouchableOpacity, View, String, Inputbox,
    Redbuttons, images,
    StatusBar,
    DatePickerAndroid,
    TextInput
} from '../import'

import DatePicker from 'react-native-date-picker'
import AsyncStorage from '@react-native-community/async-storage';
export const ProDetails = ({ navigation, route, onSelectDate, onSelectTime }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [email, setemail] = useState('')
    const [name, setname] = useState('')
    const [monu, setmonu] = useState('')
    const [pax, setpax] = useState(0)
    const [dob, setdob] = useState(new Date())

    const [remark, setremark] = useState('')
    const [prremark, setprremark] = useState('')
    const [resubmit, setresubmit] = useState(0)
    const [issubmit, setissubmit] = useState(false)
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [currentTime, setCurrentTime] = useState(new Date());
    const [ismodel, setismodel] = useState(false)
    const [isFocused, setIsFocused] = useState(false);

    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [openDate, setOpenDate] = useState(false);
    const [openTime, setOpenTime] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const apromotiondata = route?.params;
    // console.log('apromotiondata<>',apromotiondata)
    const selectedimg = route?.params;
    // console.log('selectedimg<>',selectedimg)
    const bardetail = route.params;
    // console.log('bardetail<>',bardetail)
    useEffect(() => {
        let focusListener;
    
        async function fetchData() {
            try {
                const result = await AsyncStorage.getItem('owlglasslogin');
                if (result) {
                    const screenData = JSON.parse(result);
                    setname(screenData.name);
                    setemail(screenData.email);
                    setmonu(screenData.mobile);
                    console.log('screenData:', screenData);
                }
                
                const venderdata = route?.params;
                if (venderdata) {
                    getpromotion(venderdata.venderdata.id);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    
        focusListener = navigation.addListener('focus', fetchData);
    
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
            setCurrentTime(new Date());
        }, 1000); // Update every second
    
        return () => {
            // Cleanup focus listener and interval
            if (focusListener) {
                focusListener();
            }
            clearInterval(interval);
        };
    }, [navigation, route]);

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    // const formattedTime = `${hours}:${minutes}:${seconds}`;

    // const formattedDateTime = currentDateTime.toDateString(); // Format the date and time


    const validateEmail = (email) => {
        // Email validation regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    // const handleDateChange = (newDate) => {
    //     setDate(newDate);
    //     setShowDatePicker(false);
    // };

    // const showDatepicker = () => {
    //     if (Platform.OS === 'ios') {
    //         setShowDatePicker(true);
    //     } else {
    //         DatePickerAndroid.open({
    //             date,
    //         }).then(({ action, year, month, day }) => {
    //             if (action !== DatePickerAndroid.dismissedAction) {
    //                 const selectedDate = new Date(year, month, day);
    //                 setDate(selectedDate);
    //             }
    //         });
    //     }
    // };

    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    const validateMobileNumber = (monu) => {
        // Mobile number validation regular expression
        const mobileRegex = /^[0-9]{10}$/;
        return mobileRegex.test(monu);
    };
    const validateDOB = (dob) => {
        // DOB validation regular expression for DD / MM / YYYY format
        const dobRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
        return dobRegex.test(dob);
    };
    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    const closeModalnext = () => {

        setissubmit(true)
        if (name !== '' && validateEmail(email) && monu !== '' &&
            pax !== '' && remark !== '' && prremark !== '') {
            setModalVisible(false);
            setismodel(true)
        }
    };

    const closeModalsubmit = () => {
        setismodel(false);
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
        <ScrollView style={{ backgroundColor: 'white' }}>
            <StatusBar barStyle="light-content" style="auto" translucent={true} />
            <View style={styles.mainredview}>
                <View style={styles.imagesview}>
                    <Image resizeMode='stretch' style={styles.fimage} source={{ uri: `https://appdevelopmentsingapore.com/owlglass_react/admin/${selectedimg?.selectedimg?.image || apromotiondata?.apromotiondata?.image || bardetail?.image}` }}></Image>
                    <TouchableOpacity style={styles.fixedpos} onPress={() => navigation.goBack()}>
                        <Image source={images.Back}></Image>
                    </TouchableOpacity>

                </View>

                <View style={styles.centervirw}>
                    <Text style={styles.textname}>{selectedimg?.selectedimg?.name || apromotiondata?.apromotiondata?.name || bardetail?.name || bardetail?.name}</Text>
                    <Text style={{ color: isFocused ? '#808080' : '#808080' }}>{selectedimg?.selectedimg?.description || apromotiondata?.apromotiondata?.description || bardetail?.description}</Text>
                    <View style={styles.lastvw}>
                        <Redbuttons
                            title='Make Reservation'
                            onPress={() => openModal()}
                        />
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
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={styles.scrollContainer}>
                                <View style={styles.flewrowviwfd}>
                                    <Text style={[styles.mtitle, { color: isFocused ? '#32343E' : '#32343E', marginLeft: -4.5, }]}>Reservation</Text>
                                    <TouchableOpacity onPress={closeModal}>
                                        <Image source={images.close} style={styles.closeimg} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.box1}>
                                    <Text style={[styles.titletext, { color: isFocused ? '#808080' : '#808080' }]}>Please be informed that reservation will only be confirmed if the companies calls or emails you for the confirmation. </Text>
                                    <View style={styles.heigthmargin} />

                                    <Text style={[styles.titletext, { color: isFocused ? '#808080' : '#808080' }]}>{String.Name}*</Text>
                                    {/* <Inputbox
                                        placeholder={String.Name}
                                        placeholderTextColor={'#808080'}
                                        onChangeText={(name) => setname(name)}
                                        value={name}
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

                                    {issubmit && name == '' ?
                                        <Text style={styles.errtxt}>Enter name</Text>
                                        : null}


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
                                        <Text style={styles.errtxt}>Enter valid email</Text>
                                        : null}

                                    <Text style={[styles.titletext, { color: isFocused ? '#808080' : '#808080' }]}>{String.MobileNumber}*</Text>
                                    <View style={styles.textinputview}>
                                        <TextInput
                                            style={{ fontSize: 14, justifyContent: 'center', color: isFocused ? '#000' : '#000' }}
                                            placeholder={String.MobileNumber}
                                            placeholderTextColor={isFocused ? '#808080' : '#808080'}
                                            onChangeText={(monu) => setmonu(monu)}
                                            value={monu}>
                                        </TextInput>
                                    </View>
                                    {issubmit && (monu === '' || !validateMobileNumber(monu)) ? <Text style={styles.errtxt}>Enter valid mobile number</Text> : null}


                                    <Text style={[styles.titletext, { color: isFocused ? '#808080' : '#808080' }]}>N.o of Pax*</Text>
                                    <Inputbox
                                        onChangeText={(pax) => setpax(pax)}
                                        value={pax}
                                    />
                                    {issubmit && pax == '' ? <Text style={styles.errtxt}>Enter N.o of Pax</Text> : null}

                                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'center', alignSelf: 'center' }}>
                                        <TouchableOpacity onPress={() => setOpenDate(true)} style={{ width: '50%' }}>
                                            <Text style={[styles.titletext, { color: isFocused ? '#808080' : '#808080', marginLeft: 13 }]}>Date*</Text>
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
                                        {/* {showDatePicker && (
                                            <DatePicker
                                                date={date}
                                                onDateChange={handleDateChange}
                                                mode="date"
                                            />
                                        )} */}
                                        <TouchableOpacity onPress={() => setOpenTime(true)} style={{ width: '50%' }}>
                                            <Text style={[styles.titletext, { color: isFocused ? '#808080' : '#808080', marginLeft: 10 }]}>Time*</Text>
                                            <View style={styles.boxdate}>
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

<Text style={[styles.titletext, { color: isFocused ? '#808080' : '#808080' }]}>Promo Reference</Text>
                                    <Inputbox
                                        placeholder='E.g.'
                                        placeholderTextColor={'#808080'}
                                        onChangeText={(prremark) => setprremark(prremark)}
                                        value={prremark}
                                    />
                                    {issubmit && prremark == '' ? <Text style={styles.errtxt}>Enter Promo Reference</Text> : null}

                                    <Text style={[styles.titletext, { color: isFocused ? '#808080' : '#808080' }]}>Remarks</Text>
                                    <Inputbox
                                        placeholder='E.g.'
                                        placeholderTextColor={'#808080'}
                                        onChangeText={(remark) => setremark(remark)}
                                        value={remark}
                                    />
                                    {issubmit && remark == '' ? <Text style={styles.errtxt}>Enter remark</Text> : null}
                                  

                                    <TouchableOpacity style={styles.buttonviwestyles} onPress={() => setresubmit(1)}>
                                        <Redbuttons
                                            title={String.SUBMIT}
                                            onPress={() => closeModalnext()}
                                        />
                                    </TouchableOpacity>

                                    <View style={styles.heightviewtwo}></View>

                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={ismodel}
                    onRequestClose={closeModalsubmit}
                >
                    <TouchableOpacity style={styles.modalContainers} onPress={() => closeModalsubmit()}>
                        <View style={styles.modalContents}>
                            <Text style={styles.mtxt}>Submitted successfully.</Text>
                        </View>
                    </TouchableOpacity>
                </Modal>
            </View>
        </ScrollView>
    )
}