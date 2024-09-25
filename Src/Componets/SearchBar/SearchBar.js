import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { images } from '../../Helpers/images';

const SearchBar = ({ onSearch, onPress, styleview, styleSearch,val  }) => {
    const [searchText, setSearchText] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const handleSearch = () => {
        console.log('searchText =>> ', searchText)
        onSearch(searchText);
    };
    const handleclear = () => {
        onSearch('');
        setSearchText('')
    }
  

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.searchdataview}>
                <TouchableOpacity onPress={() => {
                    handleSearch();
                    handlePress();
                   

                }} style={{ backgroundColor: '#F6F6F6', width: '15%', justifyContent: 'center', alignSelf: 'center', marginHorizontal: 12 }} >
                    <Image style={styles.searchburron} source={images.Search} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress} style={[styles.styleview, styleSearch]}>
                    {/* <View style={{ width: '100%', justifyContent: 'center', alignSelf: 'center' }} > */}
                    <TextInput
                        placeholder="Search places"
                        placeholderTextColor={isFocused ? '#808080' : '#808080'}
                        value={searchText || val}
                       
                        onSubmitEditing={handleSearch}
                        onChangeText={(text) => {
                            setSearchText(text);
                            onSearch(text);
                        }}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        style={[styles.input, styleview, styleSearch, { color: isFocused ? '#808080' : '#808080' }]}
                    />
                    {/* </View> */}
                </TouchableOpacity>
                {searchText.length > 0 ?
                    <TouchableOpacity onPress={() => handleclear()} style={{
                        width: '10%',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        position: "absolute",
                        right: 15
                    }} >
                        <Image source={images.closesr} />
                    </TouchableOpacity>

                    : null}
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {


    },
    input: {
        // height: 38,
        borderColor: '#F6F6F6',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: '#F6F6F6',
        color: '#676767',
        fontSize: 16,
        // fontFamily: 'SEN-Regular',
        // fontWeight:'bold'

    },
    searchdataview: {
        padding: 8,
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
        marginTop: 20,
        flexDirection: 'row',
        width: '100%',
    }
});

export default SearchBar;
