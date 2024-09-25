// CommonImports.js
import React, { useState, useRef, useEffect } from 'react';
import { Image, ScrollView, Text, Modal, Linking, TouchableOpacity, ActivityIndicator, TextInput, View, StatusBar, SafeAreaView, Alert } from 'react-native';
import Redbuttons from '../Componets/Redbuttons/Redbuttons';
import { images } from '../Helpers/images';
import AsyncStorage from '@react-native-community/async-storage';
import { Dropdown } from "react-native-element-dropdown";
import { String } from '../Helpers/String';
import Inputbox from '../Componets/Inputbox/Inputbox';
import SearchBar from '../Componets/SearchBar/SearchBar';
// import CheckBox from '@react-native-community/checkbox';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import Swiper from 'react-native-swiper';
import { resetNavigateTo } from '../../NavigationHelper';
import MaskInput, { Masks } from 'react-native-mask-input';
import SplashScreen from 'react-native-splash-screen';
import {globalstyle} from '../screens/globalstyle'
var ImagePicker = require('react-native-image-picker');
import DatePicker from 'react-native-date-picker'
export { React, useState, globalstyle, ImagePicker, Swiper, SplashScreen, ActivityIndicator, MaskInput, TextInput, Alert, Masks, resetNavigateTo, 
    useEffect, useRef,
    
    //  CheckBox,
     GoogleSignin,
     Linking,
    //   LoginManager,
    //   AccessToken,
       SearchBar, Inputbox, Dropdown, String, Image, ScrollView, Text, Modal, TouchableOpacity, View, StatusBar, SafeAreaView, Redbuttons, images, AsyncStorage };
