import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    row: {
        marginTop: 20, width: '100%', justifyContent: 'center'
    },
    fixedpos: {
        flexDirection: 'row',
        width: '100%',

    },
    allcat: {
        fontSize: 16, color: 'black', width: '75%'
    },
    seal: {
        width: '20%', fontSize: 14, color: 'black', justifyContent: 'center', alignSelf: 'center', textAlign: 'right'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
    slider: {
        width: 200,
        height: 40,
    },
    scrollViewContainer: {
        flexDirection: 'row', // Align items horizontally
        padding: 10,
    },
    item: {
        width: 90, // Adjust the width as needed
        marginRight: 10, // Adjust the margin as needed
        backgroundColor: '	#808080',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        padding: 10,
        borderWidth: 2,
        borderColor: '#808080'

    },
    txtcl: {
        color: 'black', fontSize: 15, fontWeight: 'bold'
    },
    itemc: {
        width: 90, // Adjust the width as needed
        marginRight: 10, // Adjust the margin as needed
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        padding: 10,
        borderColor: '#EDEDED',
        borderWidth: 1

    },
    txtclc: {
        color: 'black', fontSize: 15,
    },
    finalview: {
        justifyContent: 'center', alignSelf: 'center', width: '100%', marginTop: 20
    },
    imagecs: {
        width: '100%', height: 200
    },
    tag: {
        backgroundColor: '#D9D9D9', color: '#EA424C', padding: 8, borderRadius: 15
    },
    filtertag: {
        backgroundColor: '#E8E8E8', color: '#A0A0A0', padding: 8, borderRadius: 15
    },
    clertxt: {
        backgroundColor: '#979797', color: 'white', padding: 8, borderRadius: 15
    },
    savetxt: {
        backgroundColor: '#75AF98', color: 'white', padding: 8, borderRadius: 15
    },
    opentxt: {
        backgroundColor: '#1D9464', color: 'white', padding: 6, borderRadius: 15,
        textAlign: 'center',
        marginTop: 20,
        position: 'absolute',
        marginLeft: '70%'
    },
    positionstyles:{
        position: 'absolute',
        right:20,
        backgroundColor: '#1D9464',
        width:70, height:30,
        borderRadius: 15,
        justifyContent:"center", marginTop:20
    },
    closetxt: {
        backgroundColor: '#EA424C', color: 'white', padding: 6, borderRadius: 15,
        textAlign: 'center',
        marginTop: 20,
        position: 'absolute',
        marginLeft: '70%'
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
    opentextstyle:{
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end', // Align the modal to the bottom
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,

        width: '100%'
    },
    closeButton: {
        fontSize: 18,
        color: 'blue',
        marginTop: 20,
    },
    styleSearch: {
        marginLeft: -22
    },
    imagecs: {
        width: '100%', height: 200
    },
    openstyletaxt: {
        position: 'absolute',
        right: 10,
        height: 30, width: 70,
        borderRadius: 15,
        backgroundColor: '#1D9464',
        marginTop: 20, justifyContent: 'center'

    },
    
    txtvend: {
        marginTop: 10, color: '#32343E', fontWeight: 'bold', fontSize: 16
    },
    txttwoven: {
        marginTop: 5, color: '#A0A5BA', fontSize: 12
    },
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
        marginRight:7,
        justifyContent: 'center', 
        alignItems: 'center', 
        // marginLeft:-1
      },
})