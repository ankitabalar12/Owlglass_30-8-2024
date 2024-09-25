
import { styles } from './styles';
import {
    React,
    useState,
    Image,
    ScrollView, Text, Modal,
    TouchableOpacity, View, String,
    Redbuttons, images, AsyncStorage,Inputbox
} from '../import'


export const Faqs = ({ navigation }) => {
    const [onefaq, setonefaq] = useState(0)
    const [twofaq, settwofaq] = useState(0)
    const [threefaq, setthreefaq] = useState(0)

    const faqsset = () => {
        if (onefaq == 1) {
            setonefaq(0)
        } else {
            setonefaq(1)
        }

    }
    const faqssett = () => {
        if (twofaq == 1) {
            settwofaq(0)
        } else {
            settwofaq(1)
        }
    }
    const faqssetth = () => {
        if (threefaq == 1) {
            setthreefaq(0)
        } else {
            setthreefaq(1)
        }
    }
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center' }}>
                <View style={{ height: 20 }}></View>

                <TouchableOpacity style={styles.fixedpos} onPress={() => navigation.goBack()}>
                    <View style={{ backgroundColor: '#F0F5FA', width: 40, height: 40, borderRadius: 50 }}>
                        <Image style={{ alignSelf: 'center', marginTop: 12 }} source={images.goBack}></Image>
                    </View>
                    <Text style={{ alignSelf: 'center', color: '#181C2E', fontSize: 17 }}>     FAQS</Text>
                </TouchableOpacity>
                <View style={{ height: 20 }}></View>

                <View style={styles.box}>
                    <TouchableOpacity onPress={() => faqsset()}>
                        <Text style={onefaq == 1 ? styles.txtt : styles.txtf}>
                            Who confirms the reservation?
                        </Text>
                    </TouchableOpacity>
                    {onefaq == 1 ?
                        <TouchableOpacity>
                            <Text style={styles.opentxt}>Reservation will be confirmed by the place (e.g. clubs, pubc, bars). </Text>
                        </TouchableOpacity>
                        : null}
                </View>
                <View style={{ height: 20 }}></View>

                <View style={styles.box}>
                    <TouchableOpacity onPress={() => faqssett()}>
                        <Text style={twofaq == 1 ? styles.txtt : styles.txtf}>
                            How do we sign up for the promotion?
                        </Text>
                    </TouchableOpacity>
                    {twofaq == 1 ?
                        <TouchableOpacity>
                            <Text style={styles.opentxt}>Reservation will be confirmed by the place (e.g. clubs, pubc, bars). </Text>
                        </TouchableOpacity>
                        : null}
                </View>
                <View style={{ height: 20 }}></View>

                <View style={styles.box}>
                    <TouchableOpacity onPress={() => faqssetth()}>
                        <Text style={threefaq == 1 ? styles.txtt : styles.txtf}>
                            I am interested to be a vendor.
                        </Text>
                    </TouchableOpacity>
                    {threefaq == 1 ?
                        <TouchableOpacity>
                            <Text style={styles.opentxt}>Reservation will be confirmed by the place (e.g. clubs, pubc, bars). </Text>
                        </TouchableOpacity>
                        : null}
                </View>
            </View>
        </ScrollView>
    )
}