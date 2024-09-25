import { styles } from './styles';
import {
    React,
    useState,
    Image,
    ScrollView, Text, Modal,
    TouchableOpacity, View, Dropdown, String, TextInput,
    Redbuttons, images, AsyncStorage,
} from '../import'
import { contact_form } from '../Apicall';


export const Feedback = ({ navigation }) => {
    const [ismodel, setismodel] = useState(false)
    const [isfb, setisfb] = useState('')
    const [isrefb, setisrefb] = useState('')
    const [mess, setmess] = useState('')
    const [issubmit, setissubmit] = useState(false)
    const [isFocused, setIsFocused] = useState(false);
    const feedback = [
        { label: 'General Feedback', value: '1', },
        { label: 'Open Feedback', value: '2' },
        { label: 'Feedback', value: '3' },
    ];
    const reqfeedback = [
        { label: 'Yes', value: '1' },
        { label: 'No', value: '2' },
    ];

    const submitbox = async () => {
        const result = await AsyncStorage.getItem('owlglasslogin')
        const screenData = JSON.parse(result)
        console.log('screenData', screenData.id, 'isfb => ', isfb,
            'mess =>>', mess, 'isrefb => ', isrefb)

        if (isfb !== '' && isrefb !== '' && mess !== '') {
            const data = {
                user_id: screenData.id,
                type: isfb,
                message: mess,
                callback: isrefb,
            };
            contact_form(global.url + 'contact_form.php', data).then((res) => {
                console.log('res contact_form => ', res)
                if (res.ResponseCode == 1) {
                    setissubmit(true)
                } else {
                    alert(res.ResponseMsg)
                }
            })
        }
    }

    const closeModal = () => {
        setismodel(false);
    };
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ width: '85%', justifyContent: 'center', alignSelf: 'center' }}>
                <View style={{ height: 20 }}></View>

                <TouchableOpacity style={styles.fixedpos} onPress={() => navigation.goBack()}>
                    <View style={{ backgroundColor: '#F0F5FA', width: 40, height: 40, borderRadius: 50 }}>
                        <Image style={{ alignSelf: 'center', marginTop: 12 }} source={images.goBack}></Image>
                    </View>
                    <Text style={{ alignSelf: 'center', color: '#181C2E', fontSize: 17 }}>     Feedback</Text>
                </TouchableOpacity>
                <View style={{ height: 25 }}></View>
                <Text style={[styles.titletext, { color: isFocused ? '#808080' : '#808080' }]}>Topic</Text>
                <View style={styles.passtxt}>
                    <Dropdown
                        labelField="label"
                        valueField="value"
                        data={feedback}
                        itemTextStyle={{color: isFocused ? '#808080' : '#808080'}}
                        placeholderStyle={[styles.placeholder, { color: isFocused ? '#808080' : '#808080' }]}
                        selectedTextStyle={[styles.selectedText, { color: isFocused ? '#808080' : '#808080' }]}
                        maxHeight={300}
                        placeholder={'General Feedback'}
                        value={isfb}
                        onChange={(item) => {
                            setisfb(item.value);
                        }}
                    />
                </View>
                {issubmit && isfb == '' ?
                    <Text style={[styles.errtxt]}>Please Select Feedback</Text>
                    : null}
                <View style={{ height: 15 }}></View>
                <Text style={[styles.titletext, { color: isFocused ? '#808080' : '#808080' }]}>Do you require a callback?</Text>
                <View style={[styles.passtxt,]}>
                    <Dropdown
                        labelField="label"
                        valueField="value"
                        itemTextStyle={{color: isFocused ? '#808080' : '#808080'}}
                        data={reqfeedback}
                        placeholderStyle={[styles.placeholder, { color: isFocused ? '#808080' : '#808080' }]}
                        selectedTextStyle={[styles.selectedText, { color: isFocused ? '#808080' : '#808080' }]}
                        inputSearchStyle={styles.inputSearchStyle}
                        maxHeight={300}
                       placeholder={'Yes'}
                        value={isrefb}
                        onChange={(item) => {
                            setisrefb(item.value);
                        }}
                    />
                </View>
                {issubmit && isrefb == '' ?
                    <Text style={[styles.errtxt,]}>Please Select require</Text>
                    : null}
                <View style={{ height: 15 }}></View>
                <Text style={[styles.titletext, { color: isFocused ? '#808080' : '#808080' }]}>Message</Text>
                <View style={styles.messbox}>
                    <TextInput
                        multiline={true}
                        placeholderTextColor={isFocused ? '#808080' : '#000'}
                        placeholder='Enter your message'
                        onChangeText={(value) => setmess(value)}
                        value={mess}>
                    </TextInput>
                </View>
                {issubmit && mess == '' ?
                    <Text style={styles.errtxt}>Please Enter Message</Text>
                    : null}
                <View style={{ height: 50 }}></View>

            </View>
            <View style={{ width: '95%', alignSelf: 'center' }}>
                <Redbuttons
                    title={String.SUBMIT}
                    onPress={() => submitbox()}
                />
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={ismodel}
                onRequestClose={closeModal}
            >
                <TouchableOpacity style={styles.modalContainer} onPress={() => closeModal()}>
                    <View style={styles.modalContent}>
                        <Text style={styles.mtxt}>Submitted successfully.</Text>
                    </View>
                </TouchableOpacity>
            </Modal>
        </ScrollView>
    )
}