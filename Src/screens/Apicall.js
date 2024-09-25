import AsyncStorage from '@react-native-community/async-storage';

export const login = async (url, data) => {
    const res = await fetch(url, { method: 'post', body: JSON.stringify((data)) });
    const finalRes = await res.json();
    if (finalRes.ResponseCode == 1) {
        await AsyncStorage.setItem('owlglasslogin', JSON.stringify(finalRes.user_data));
    } else {
        alert(finalRes.ResponseMsg)
    }
    return finalRes;
};
export const signup = async (url, data) => {
    const res = await fetch(url, { method: 'post', body: JSON.stringify((data)) });
    const finalRes = await res.json();
    return finalRes;
};
export const registetion = async (url, data) => {
    const res = await fetch(url, { method: 'post', body: JSON.stringify((data)) });
    const finalRes = await res.json();
    return finalRes;
};
export const socialsignup = async (url, data) => {
    const res = await fetch(url, { method: 'post', body: JSON.stringify((data)) });
    const finalRes = await res.json();
    if (finalRes.ResponseCode == 1) {
        await AsyncStorage.setItem('owlglasslogin', JSON.stringify(finalRes.user_data));
    } else {
        alert(finalRes.ResponseMsg)
    }
    return finalRes;
};
export const imageupload = async (url, data) => {
    const res = await fetch(url, { method: 'post', body: JSON.stringify((data)) });
    const finalRes = await res.json();
    return finalRes;
};
export const getcategory = async (url) => {
    const res = await fetch(url, { method: 'get' });
    const finalRes = await res.json();
    console.log('getcategory => ', finalRes)
    return finalRes;
};
export const getdrinksspeciality = async (url) => {
    const res = await fetch(url, { method: 'get' });
    const finalRes = await res.json();
    console.log('getdrinksspeciality => ', finalRes)
    return finalRes;
};
export const gettypeofplace = async (url) => {
    const res = await fetch(url, { method: 'get' });
    const finalRes = await res.json();
    console.log('gettypeofplace => ', finalRes)
    return finalRes;
};
export const reservation = async (url, data) => {
    const res = await fetch(url, { method: 'post', body: JSON.stringify((data)) });
    const finalRes = await res.json();
    return finalRes;
};
export const contact_form = async (url, data) => {
    const res = await fetch(url, { method: 'post', body: JSON.stringify((data)) });
    const finalRes = await res.json();
    return finalRes;
};
export const getnotification = async (url, data) => {
    const res = await fetch(url, { method: 'post', body: JSON.stringify((data)) });
    const finalRes = await res.json();
    return finalRes;
};
export const myreservation = async (url, data) => {
    const res = await fetch(url, { method: 'post', body: JSON.stringify((data)) });
    const finalRes = await res.json();
    return finalRes;
};
export const changepassworduser = async (url, data) => {
    const res = await fetch(url, { method: 'post', body: JSON.stringify((data)) });
    const finalRes = await res.json();
    return finalRes;
};
export const getpramotion = async (url, data) => {
    console.log('data >><<', data)
    const res = await fetch(url, { method: 'post', body: JSON.stringify((data)) });
    const finalRes = await res.json();
    return finalRes;
};
export const addremovefavorite = async (url, data) => {
    const res = await fetch(url, { method: 'post', body: JSON.stringify((data)) });
    const finalRes = await res.json();
    return finalRes;
};
export const getfavorite = async (url, data) => {
    const res = await fetch(url, { method: 'post', body: JSON.stringify((data)) });
    const finalRes = await res.json();
    return finalRes;
};
export const getvendor = async (url, data) => {
    const res = await fetch(url, { method: 'post', body: JSON.stringify((data)) });
    const finalRes = await res.json();
    return finalRes;
};
export const accountdelete = async (url, data) => {
    const res = await fetch(url, { method: 'post', body: JSON.stringify((data)) });
    const finalRes = await res.json();
    return finalRes;
};
export const updateprofileuser = async (url, data) => {
    const res = await fetch(url, { method: 'post', body: JSON.stringify((data)) });
    const finalRes = await res.json();
    return finalRes;
};