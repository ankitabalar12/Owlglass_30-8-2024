import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
export default function Redbuttons({ navigation, title, onPress }) {

    return (
        <View>
            <TouchableOpacity onPress={onPress} style={styles.btn}>
                <Text style={styles.next}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    btn: {
        height: 50, width: '90%', backgroundColor: '#EA424C',
        justifyContent: 'center', alignSelf: 'center',
        borderRadius: 12
    },
    next: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform:'uppercase'
    }
})