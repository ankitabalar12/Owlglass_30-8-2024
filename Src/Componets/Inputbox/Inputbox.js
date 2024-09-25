// TextInputComponent.js
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

const Inputbox = ({ placeholder,keyboardType, onChangeText, styleview, maxLength, secureTextEntry, placeholderTextColor, textviewstyle, textinputviewto }) => {
    const [text, setText] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const handleTextChange = (newText) => {
        setText(newText);
        if (onChangeText) {
            onChangeText(newText);
        }
    };

    return (

        <View style={[styles.textinputview, styleview]}>
            <TextInput
                placeholder={placeholder}
                value={text}
                placeholderTextColor={isFocused ?  '#808080'  : '#808080'}
                onChangeText={handleTextChange}
                secureTextEntry={secureTextEntry}
                style={{ fontSize: 14, justifyContent: 'center', color : isFocused ?  '#808080'  : '#808080'}}
                maxLength={maxLength}
                keyboardType={keyboardType}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                // styleinput={[styles.styleinput,{color : isFocused ?  '#808080'  : '#808080'}]}
            />

        </View>

    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 10,
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

});

export default Inputbox;
