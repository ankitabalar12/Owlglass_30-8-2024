import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fixedpos: {
        flexDirection: 'row',
        width: '100%',

    },
    titletext: {
        width: '100%',
        alignSelf: 'center'
    },
    inputSearchStyle: {
        color: 'red'
    },
    selectedText:{
color:'#000'
    },
    passtxt: {
        width: '100%',
        backgroundColor: '#F0F5FA',
        borderRadius: 8,
        marginTop: 8,
        height: 56,
        padding: 9,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    messbox: {
        width: '100%',
        backgroundColor: '#F0F5FA',
        borderRadius: 8,
        marginTop: 8,
        height: 90,
        padding: 9,

    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center', // Align the modal to the bottom
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        elevation: 5,
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    placeholder:{

    },
    mtxt: {
        color: '#32343E', fontSize: 16, fontWeight: 'bold',
        justifyContent: 'center', alignSelf: 'center', textAlign: 'center'
    },
    errtxt: {
        width: '100%',
        alignSelf: 'center',
        color: 'red'
    },
})