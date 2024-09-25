// import { Image, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { images } from '../../Helpers/images';
// import { Home } from '../../screens/Home/Home';
// import { SettingHome } from '../../screens/SettingHome/SettingHome';
// const Tab = createBottomTabNavigator();
// const BottamTabs = () => {
//     return (
//         <View style={{flex:1,}}>
//             <Tab.Navigator
//                 screenOptions={{
//                     headerShown: false,

//                     tabBarStyle: {
//                         borderBottomWidth: 0,
//                         alignItems: 'center',
//                         height: 40,
//                         width: 100,
//                         borderRadius: 30,
//                         justifyContent: 'center',
//                         alignSelf: 'center',
//                         marginBottom: 5,
//                         backgroundColor: 'white',
//                         alignContent: 'center'
//                     },
//                 }}>
//                 <Tab.Screen
//                     name="HomeScreen"
//                     options={{
//                         tabBarLabel: '',
//                         tabBarIcon: ({ focused }) => (
//                             <Image style={{ width: 20, height: 20, marginTop: 8 }} source={focused ? images.homered : images.home} />
//                         ),
//                     }}
//                     component={Home}
//                 />
//                 <Tab.Screen
//                     name="SettingHome"
//                     options={{
//                         tabBarLabel: '',
//                         tabBarIcon: ({ focused, size }) => (
//                             <Image style={{ width: 20, height: 20, marginTop: 8 }} source={focused ? images.sett : images.settred} />
//                         ),
//                     }}
//                     component={SettingHome}
//                 />

//             </Tab.Navigator>

//         </View>
//     );
// }

// export default BottamTabs


import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { images } from '../../Helpers/images';
import { Home } from '../../screens/Home/Home';
import { SettingHome } from '../../screens/SettingHome/SettingHome';
const Tab = createBottomTabNavigator();
const BottamTabs = () => {
    return (
        // <View style={{flex:1,alignSelf: 'center',
        // justifyContent:"center"}}>
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarInactiveTintColor: '#fff',
                tabBarActiveTintColor: '#c59619',

                tabBarLabelStyle: {
                    marginBottom: 10,
                    fontSize: 10,
                    fontWeight: '800'
                },
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopWidth: 0,
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: 15,
                    //   borderColor: '#1a1915',
                    //   borderWidth: 0.5,
                    height: 40,
                    width: 40,
                    alignSelf: 'center',
                    justifyContent: "center",
                    borderRadius: 30,
                    marginLeft: '35%',
                    borderColor:"#CCCBCB",
                    borderWidth:1,
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    // borderTopLeftRadius:20,
                    // borderTopRightRadius:20
                    // borderRadius: 33, 
                    // marginHorizontal:'1%'
                },
            }}>
            <Tab.Screen
                name="HomeScreen"
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <Image style={{ width: 20, height: 20, marginTop: 20 }} source={focused ? images.HomeRedsvg : images.grayhome} />
                    ),
                }}
                component={Home}
            />
            <Tab.Screen
                name="SettingHome"
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused, size }) => (
                        <Image style={{ width: 20, height: 20, marginTop: 20 }} source={focused ? images.setredimg : images.setimg} />
                    ),
                }}
                component={SettingHome}
            />


        </Tab.Navigator>
        // </View>

    );
}

export default BottamTabs