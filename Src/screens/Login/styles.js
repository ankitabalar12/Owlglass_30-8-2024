import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fimage: {
        width: '100%',
        height: 250
    },
    fixedpos: {
        marginTop: -80,
        position: 'relative',
        flexDirection: 'row',
        padding: 8
    },
  
    
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
    errtxt: {
        width: '85%',
        alignSelf: 'center',
        color: 'red'
    },
    passtxt: {
        width: '85%',
        // backgroundColor: '#F6F6F6',
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
        width: '10%', borderWidth: 1,
        borderRadius:10

    },
    lastvw: {
        flexDirection: 'row', width: '85%', justifyContent: 'center', alignSelf: 'center',
        borderWidth: 0
    },
    fntsty: {
        fontSize: 10
    }
})