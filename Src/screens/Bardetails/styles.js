import { StyleSheet } from "react-native";
import { StatusBar } from "../import";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: 'white',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
   
    mainview: {
        width: '100%', backgroundColor: 'white',
    },
    heightview: {
        height: 280,
        
    },
    texttopmarstyle: {
        width: '90%', justifyContent: 'center', alignSelf: 'center', marginTop: 20
    },
    textdrink:{
color:"#EA424C",
fontFamily: 'sen', 
    },
    fimage: {
        width: '100%',
        height: 280,
        borderRadius: 25
    },
    fixedpos: {
        marginTop: -250,
        position: 'relative',
        padding: 8,
        marginHorizontal: 20,
        flexDirection: 'row', justifyContent: 'space-between',
    },
    tag: {
        //  color: '#EA424C',
        // fontFamily: 'sen',
        // textAlign: 'center',
        padding: 10,
        margin: 5,
         borderRadius: 20,
          fontSize: 12,
          padding: 7,
          backgroundColor: '#f7f7f7',
           textAlign: 'center',
           textAlignVertical: 'center',
           marginLeft:-1

         
    },
    beartextallrowline: {
        marginTop: 5,
        height: 18,
        width: 50,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "#D9D9D9",
        borderRadius: 10,

    },
    addrestextall: {
        color: '#A0A5BA', fontSize: 14
    },
    txtallstyle: {
        color: '#A0A5BA', fontSize: 14, marginTop: 7
    },
    beartextallrowline2: {
        marginLeft: 8,
    },
    beartextallrowline3: {
        marginLeft: 8,
        width: 55,
    },
    resubmittxt: {
        color: '#A0A5BA', fontSize: 14, marginTop: 10

    },
    resubmittxterewr: {
        marginTop: 15
    },
    resubmittxt: {
        marginTop: -1,
    },
    title2df: {
        marginTop: 15,
        fontSize: 16
    },
    title: {
        fontSize: 20, color: '#32343E',
        fontWeight: 'bold',
        marginTop: 30,
        fontSize: 20,
        fontFamily: 'sen', 
    },
    detail: {
        fontSize: 14,
        color: '#32343E',
        marginTop: 3,
        marginRight: 2

    },
    flexrowtowd: {
        flexDirection: 'row', marginTop: 10
    },
    closeimg: {
        height: 15, width: 15
    },
    flwxrowthree: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 32,
        marginTop: "9%"
    },
    box: {
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row', marginTop: 50
    },
    boxstyleview: {
        width: '50%'
    },
    lastbox: {
        width: '80%', borderWidth: 2, borderColor: 'red', borderRadius: 12, height: 50, justifyContent: 'center', alignSelf: 'center'
    },
    lasttxt: {
        color: 'red', fontWeight: 'bold', fontSize: 16, textAlign: 'center'
    },
    lastbox1: {
        width: '80%', borderWidth: 2, borderColor: 'red', borderRadius: 12, height: 50, justifyContent: 'center', alignSelf: 'center',
        backgroundColor: '#EA424C'
    },
    lasttxt1: {
        color: 'white', fontWeight: 'bold', fontSize: 16, textAlign: 'center'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end', // Align the modal to the bottom
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        width: '100%'
    },
    modalContent: {
        backgroundColor: 'white',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        elevation: 5,
        width: '100%',
        height: 590
    },

    box1: {
        backgroundColor: 'white', height: '100%', borderRadius: 20
    },
    titletext: {

        width: '85%',
        alignSelf: 'center',
        marginLeft: '1%',
        marginTop: 5
    },
    mtitle: {
        color: 'black',
         fontSize: 20, 
         fontWeight: 'bold',
        marginBottom: '2%'

    },
    hertview:{
height:42, width:42,
borderRadius:40,
backgroundColor:'#fff',
justifyContent:"center", marginTop:4
    },
    titletext2: {
        marginLeft: '4%'
    },
    hertimages: {
        height: 17, width: 22,
        alignSelf:"center"
    },
    dataview: {
        width: '95%', flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', marginLeft: '2%'
    },
    reportimg: {
        // width: '50%',
        // borderRadius: 10,
        // alignSelf: 'center',
        // // justifyContent: 'center',
        // height: 170,
        // // marginTop: 10,
        // margin: 10
        // alignSelf:"center",
        height:150,
        width:150,
        borderRadius: 10,
        margin: 6

    },
    scrollContainer: {
        flexGrow: 1,
    },
    errtxt: {
        // width: '85%',
        // alignSelf: 'center',
        marginLeft: 35,
        color: 'red',
        marginBottom: 5
    },
    styleview: {
        backgroundColor: '#F0F5FA',

    },
    boxdate: {
        height: 56,
        width: '85%',
        backgroundColor: '#F0F5FA',
        borderRadius: 8,
        marginTop: 8,
        padding: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 10,
    },
    dot: {
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
    },
    activeDot: {
        backgroundColor: 'red',
    },
    mainviewmargin: {
        marginBottom: "20%"
    },
    promotiontexstyle: {
        fontSize: 18,
        alignSelf: "center"
    },
    textinputview: {
        height: 56,
        width: '85%',
        // backgroundColor: '#F6F6F6',
        backgroundColor: '#F0F5FA',
        borderRadius: 8,
        marginTop: 8,
        padding: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 10,
    },
})