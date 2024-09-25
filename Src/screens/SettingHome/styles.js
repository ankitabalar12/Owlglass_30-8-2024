import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    row: {
        marginTop: 20, width: '100%', justifyContent: 'center'
    },
    allcat: {
        fontSize: 16, color: 'black', width: '75%'
    },
    styleview: {
        marginLeft: -22
    },
    seal: {
        width: '20%', fontSize: 14, color: 'black', justifyContent: 'center', alignSelf: 'center', textAlign: 'right'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textapiinshow: {
        color: "#000",
        fontSize: 15, fontWeight: '800'
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
        backgroundColor: '#D9D9D9', color: 'red', padding: 8, borderRadius: 15,
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
})