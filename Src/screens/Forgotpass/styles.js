import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fimage: {
        width: '100%',
        height: 250
    },
    fixedpos: {
        marginTop: -220,
        position: 'relative',
        flexDirection: 'row',
        padding: 8,
        marginHorizontal: 20
    },
    errtxt: {
        width: '85%',
        alignSelf: 'center',
        color: 'red'
    },
    fixedtxtpos: {
        marginTop: 70,
        position: 'relative',
        flexDirection: 'row',
        padding: 8
    }
    ,
    textst: {
        color: 'white', fontSize: 28, fontWeight: 'bold'
    },
    box: {
        backgroundColor: 'white', height: '100%', borderRadius: 20
    },
    titletext: {

        width: '85%',
        alignSelf: 'center'
    },
    passtxt: {
        width: '85%',
        backgroundColor: '#F0F5FA',
        borderRadius: 8,
        marginTop: 8,
        padding: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        height: 56,
    },
    eyestl: {
        justifyContent: 'center',
        alignSelf: 'center'
    },
    checkbox: {
        alignSelf: "center",
        width: '10%', borderWidth: 1

    },
    lastvw: {
        flexDirection: 'row', width: '85%', justifyContent: 'center', alignSelf: 'center',
        borderWidth: 0
    },
    txtreset: {
        padding: 10, fontSize: 16, color: '#32343E', marginHorizontal:10
    }

})