
import { StyleSheet } from "react-native";

export const globalstyle = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 9999,
    height: '100%', 
    width: '100%'
  },
})