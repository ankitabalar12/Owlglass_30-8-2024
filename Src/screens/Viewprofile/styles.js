import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fixedpos: {
        flexDirection: 'row',
        width: '100%',

    },
    icon: {
        backgroundColor: 'red', width: 30, height: 30, borderRadius: 50, justifyContent: 'center',
        alignSelf:'center',marginTop:-20,marginLeft:60,position:'relative'
    },
    errtxt: {
        width: '85%',
        alignSelf: 'center',
        color: 'red'
    },
    titletext: {
        width: '85%',
        alignSelf: 'center'
        ,color:'#32343E'
    },
    textinputview: {
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
   
})