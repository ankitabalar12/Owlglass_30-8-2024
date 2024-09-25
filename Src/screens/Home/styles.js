import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    row: {
        marginTop: 20, flexDirection: 'row', width: '100%', justifyContent: 'center'
    },
    allcat: {
        fontSize: 15, color: '#32343E', width: '70%', fontFamily: 'sen'
    },
    seal: {
        width: '25%',
        fontSize: 15,
        color: '#32343E',
        justifyContent: 'center',
        alignSelf: 'center',
        textAlign: 'right',
        fontFamily: 'sen'
    },
    styleSearch: {
        marginLeft: -22
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        marginBottom: 10, fontFamily: 'sen'
    },
    slider: {
        width: 200,
        height: 40,
    },
    scrollViewContainer: {
        flexDirection: 'row', // Align items horizontally
        // padding: 10,
        marginTop: '2%', marginLeft: -3
    },
    item: {
        width: 70, // Adjust the width as needed
        marginRight: 10, // Adjust the margin as needed
        backgroundColor: '#EA424C',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        // padding: 10,
        height: 42,
        elevation: 3,
        alignSelf: 'center',

    },
    txtcl: {
        color: 'white', fontSize: 14, fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center', alignSelf: 'center', fontFamily: 'sen',
        padding: 10
    },
    itemc: {
        width: 70, // Adjust the width as needed
        marginRight: 10, // Adjust the margin as needed
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        // padding: 10,
        height: 38,
        elevation: 3,
        alignSelf: 'center'


    },
    txtclc: {
        color: '#32343E', fontSize: 14, fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'center', fontFamily: 'sen',
        padding: 10
    },
    finalview: {
        justifyContent: 'center', alignSelf: 'center', width: '100%', marginTop: 20, fontFamily: 'sen'
    },
    imagecs: {
        width: '100%', height: 200
    },
    // tag: {
    //     color: '#EA424C',
    //     fontSize: 14,
    //     width: 45,
    //     justifyContent: 'center', 
    //     alignItems: 'center',
    //     fontFamily: 'SEN-Regular',


    // },
    // drinktextstyle: {
    //     backgroundColor: 'lightblue', // Set the background color here
    //     padding: 6,
    //     borderRadius: 20, 
    //     // textAlign: 'center',
    //     margin:5,
    //     justifyContent: 'center', // Center horizontally
    //     alignItems: 'center',
    //     // backgroundColor: "#f7f7f7",
    //     // justifyContent: 'center',
    //     // alignSelf: "center",
    // },
    tag: {
        color: '#EA424C',
        fontSize: 14,
        // width: 45,
        fontFamily: 'SEN-Regular',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    drinktextstyle: {
        backgroundColor: "#f7f7f7",
        padding: 6,
        borderRadius: 15,
        // margin: 5,
        marginRight: 7,
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft:-1
    },
    sellalltextstyles: {
        position: "absolute",
        right: 10
    },
    filterimg: {
        tintColor: "#000",
        height: 30, width: 30
    },
    filtertag: {
        backgroundColor: '#E8E8E8',
        color: '#A0A0A0',
        padding: 7,
        borderRadius: 15,

        fontFamily: 'sen'
    },
    clertxt: {
        backgroundColor: '#f7f7f7', color: '#EA424C',
        borderColor: '#EA424C',
        borderWidth: 1,
        padding: 7,
        borderRadius: 15, fontFamily: 'sen'
    },
    savetxt: {
        backgroundColor: '#75AF98', color: 'white', padding: 8, borderRadius: 15, fontFamily: 'sen'
    },
    searchview: {
        height: 60,
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
        marginTop: 20,
        // flexDirection: 'row',
        width: '100%',
        justifyContent: "center"
    },
    serchflex: {
        flexDirection: "row",
        marginLeft:20
    },
    searchtextstyle:{
         color:'#808080',
        marginLeft:16,
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
        fontSize:16,
       
    },
    searchburron: {
        height: 20, width: 20,
        marginLeft:5, 
        tintColor:'#808080',
        // fontFamily: 'Poppins-SemiBold',
        // marginTop:50
       
        // alignSelf:"center"
    },
    textapiinshow: {
        color: "#000",
        fontSize: 15, fontWeight: '800'
    },
    opentxt: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
    },
    openstyletaxt: {
        position: 'absolute',
        right: 10,
        height: 30, width: 70,
        borderRadius: 15,
        backgroundColor: '#1D9464',
        marginTop: 20, justifyContent: 'center'

    },
    closetxt: {
        backgroundColor: '#EA424C', color: 'white', padding: 6, borderRadius: 15,
        textAlign: 'center',
        marginTop: 20,
        position: 'absolute',
        marginLeft: '70%', fontFamily: 'sen'
    }
    ,
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },


    openButton: {
        fontSize: 18,
        color: 'blue',
        marginBottom: 20,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end', // Align the modal to the bottom
        alignItems: 'center',
        backgroundColor: 'rgba(246, 246, 246, 0.4)',
        width: '100%'
    },
    buttonsaveandclear2: {
        backgroundColor: "#75AF98"
    },
    buttonsaveandclear: {
        height: 30,
        width: 80,
        backgroundColor: '#979797',
        margin: 5,
        borderRadius: 50,
        justifyContent: "center",
    },
    flexrow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center', marginTop: 10
    },
    clertxt2: {
        color: "#fff",
        textAlign: "center",
        fontFamily: 'sen'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        elevation: 5,

        width: '100%'
    },
    closeButton: {
        fontSize: 18,
        color: 'blue',
        marginTop: 20, fontFamily: 'sen'
    },

    containersr: {
        padding: 8,
        backgroundColor: '#D3D3D3',
        borderRadius: 10,
        marginTop: 20,
        flexDirection: 'row',
        width: '100%',


    },
    input: {
        height: 38,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: '#D3D3D3'
        , fontFamily: 'sen'

    },
    txtvend: {
        marginTop: 10, color: '#32343E', fontWeight: 'bold', fontSize: 16
    },
    txttwoven: {
        marginTop: 5, color: '#A0A5BA', fontSize: 12
    },
    maringview: {
        marginBottom: "25%"
    }
})