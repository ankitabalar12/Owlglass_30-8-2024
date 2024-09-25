import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { Onboard } from './Src/screens/Onborad/Onborad';
import { setTopLevelNavigation } from './NavigationHelper';
import Splash from './Src/screens/Splash/Splash';
import { Login } from './Src/screens/Login/Login';
const stack = createStackNavigator()
import { Forgotpass } from './Src/screens/Forgotpass/Forgotpass';
import { Signup } from './Src/screens/Signup/Signup';
import { Home } from './Src/screens/Home/Home';
import BottamTabs from './Src/Componets/BottamTabs/BottamTabs';
import { SettingHome } from './Src/screens/SettingHome/SettingHome';
import { Bardetails } from './Src/screens/Bardetails/Bardetails';
import { ProDetails } from './Src/screens/ProDetails/ProDetails';
import { Profile } from './Src/screens/Profile/Profile';

import { Viewprofile } from './Src/screens/Viewprofile/Viewprofile';
import { Favourite } from './Src/screens/Favourite/Favourite';
import { Notification } from './Src/screens/Notification/Notification';
import { Faqs } from './Src/screens/Faqs/Faqs';
import { Feedback } from './Src/screens/Feedback/Feedback';
import { Search } from './Src/screens/Search/Search';
import { AppRegistry } from 'react-native';
import firebase from '@react-native-firebase/app';

const firebaseConfig = {
  // apiKey: "AIzaSyASZzUa6hWvbFmNq0VUXrufC9N4iSRyXW0",
  // authDomain: "webuildindaia.firebaseapp.com",
  // projectId: "owlglass-67c50",
  // storageBucket: "owlglass-67c50.appspot.com",
  // messagingSenderId: "352450014473",
  // appId: "1:64887678796:android:6504347841dfa50d39d1e9",
  // measurementId: "G-EE0MRY78HR"
};

 if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}





global.url = 'https://appdevelopmentsingapore.com/owlglass_react/api/'
import PushNotification from 'react-native-push-notification';

PushNotification.configure({
  // largeIcon: "ic_launcher",
  smallIcon: "ic_stat_assessment",
})

PushNotification.configure({
  onRegister: function (token) {
    global.tokenId = token;
  },

});

AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => PushNotification);

export default function App({ navigation }) {

  return (
    <NavigationContainer independent ref={(ref) => setTopLevelNavigation(ref)}>
      <StatusBar backgroundColor='#ffffff' barStyle="dark-content" />
      <stack.Navigator initialRouteName='Onboard'>
        <stack.Screen name="Onboard" component={Onboard} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Login" component={Login} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Forgotpass" component={Forgotpass} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Home" component={BottamTabs} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="SettingHome" component={SettingHome} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Bardetails" component={Bardetails} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="ProDetails" component={ProDetails} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}></stack.Screen>

        <stack.Screen name="Viewprofile" component={Viewprofile} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Favourite" component={Favourite} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Notification" component={Notification} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Faqs" component={Faqs} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Feedback" component={Feedback} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Search" component={Search} options={{ headerShown: false }}></stack.Screen>

      </stack.Navigator>
    </NavigationContainer>
  );
};
