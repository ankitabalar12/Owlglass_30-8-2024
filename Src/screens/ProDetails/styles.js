import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
flex:1, backgroundColor:'#fff'
    },
    fimage: {
        height: 300,width:'100%',
        borderRadius:30, 
    },
    imagesview:{
        height: 300,width:'100%',
        //  backgroundColor:'yellow',
          borderRadius:30,marginTop:10
    },
    mainredview:{
        height: 800,
         width: '100%',
        //   backgroundColor: 'red',
          justifyContent:"center",
          marginTop:-10
    },
    buttonviwestyles:{
        width: '50%', alignSelf: 'center', marginTop: 15
    },
    heigthmargin:{
        height: 10
    },
    heightviewtwo:{
        height: 20
    },
    flewrowviwfd:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        marginHorizontal: 32
    },
    textname:{
        color: 'black', fontSize: 16, marginTop:20
    },
    centervirw:{
        width: '90%', alignSelf: 'center'
    },
    fixedpos: {
        marginTop: -265,
        position: 'relative',
        flexDirection: 'row',
        padding: 8,
        marginHorizontal: 20
    },
    closeimg:{
height:20, width:20
    },
    errtxt: {
        width: '85%',
        alignSelf: 'center',
        color: 'red',
        marginTop:-4
    },
    fixedtxtpos: {
        marginTop: 90,
        position: 'relative',
        flexDirection: 'row',
        padding: 8
    },
    lastvw: {
        justifyContent: 'flex-end', // Align the modal to the bottom
        marginTop: 300
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

    box1: {
        backgroundColor: 'white', height: '100%', borderRadius: 20
    },
    titletext: {
marginTop:10,
        width: '85%',
        alignSelf: 'center'
    },
    mtitle: {
        color: 'black', fontSize: 20, fontWeight: 'bold',  fontFamily: 'SEN-Regular',

    },
    reportimg: {
        width: '90%', borderRadius: 20, alignSelf: 'center', justifyContent: 'center', height: 150
    },
    scrollContainer: {
        flexGrow: 1,
    },
    boxdate: {
        height: 56,
        width: '80%',
        backgroundColor: '#F0F5FA',
        borderRadius: 8,
        marginTop: 8,
        padding: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 10,
    },
    modalContainers: {
        flex: 1,
        justifyContent: 'center', // Align the modal to the bottom
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%'
    },
    modalContents: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        elevation: 5,
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center',
    
    },
    mtxt: {
        color: '#32343E', fontSize: 16, fontWeight: 'bold', 
        justifyContent: 'center', alignSelf: 'center', textAlign: 'center'
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