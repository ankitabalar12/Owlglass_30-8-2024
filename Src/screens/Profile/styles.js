import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fixedpos: {
        flexDirection: 'row',
        width: '100%',

    },
    menucon: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#F6F8FA',
        height: 35,
        justifyContent: 'center',
        alignSelf: 'center'
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
        borderRadius: 20,
        elevation: 5,

        width: '100%',
        justifyContent:'center',
        alignSelf:'center'
    },
    logoimg: {
        justifyContent: 'center', alignSelf: 'center', height: 18, width: 18
    },
    logogoimg: {
        justifyContent: 'center', alignSelf: 'center'
    },
    closimg:{
        justifyContent: 'center', alignSelf: 'center', height: 15, width: 15
          
    },
    fnts: {
        fontSize: 14, color: 'black', justifyContent: 'center',
    },
    mainbox: {
        backgroundColor: '#F6F8FA', padding: 12, borderRadius: 15, width: '100%'
    },
    innerbox:{
        width: '12%', backgroundColor: 'white', justifyContent: 'center', borderRadius: 50
    },
    txtbox:{
        width: '73%', justifyContent: 'center'
    },
    mtxt:{
        color:'#32343E',fontSize:20,fontWeight:'bold',justifyContent:'center',alignSelf:'center',textAlign:'center'
    },
    mftxt:{
        color:'#32343E',fontSize:16,justifyContent:'center',alignSelf:'center',textAlign:'center'
    },
    box: {
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row'
    },
    lastbox: {
        width: '60%', borderWidth: 2, borderColor: '#979797', borderRadius: 100, height: 40,
        alignSelf: 'flex-end',justifyContent:'center',
        backgroundColor:'#979797'
    },
    lasttxt: {
        color: 'white', fontWeight: 'bold', fontSize: 16, textAlign: 'center'
    },
    lastbox1: {
        width: '60%', borderWidth: 2, borderColor: 'red', borderRadius: 100, height: 40, justifyContent: 'center', alignSelf: 'flex-start',
        backgroundColor: '#EA424C'
    },
    lasttxt1: {
        color: 'white', fontWeight: 'bold', fontSize: 16, textAlign: 'center'
    },
})