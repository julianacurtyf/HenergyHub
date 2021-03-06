import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({ onPress, text, type = "PRIMARY" }) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',

        padding: 15,
        marginVertical: 10,

        alignItems: 'center',
        borderRadius: 5,
    },
    container_PRIMARY: {
        backgroundColor: '#219EBC',
    },
    container_TERTIARY: {},
    text: {
        fontFamily: 'Oswald-Medium',
        letterSpacing: 0.75,
    },
    text_PRIMARY: {
        color: 'white',
    },
    text_TERTIARY: {
        color: 'gray',
    },
});

export default CustomButton;