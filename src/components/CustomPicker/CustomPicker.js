import React from 'react';
import {View, Text, StyleSheet, Picker} from 'react-native';

const CustomInput = ({value, setValue}) => {
    return(
        <View style={styles.container}>
            <Picker value={value} onValueChange={(itemValue, itemIndex) => setValue(itemValue)} style={styles.input}>
            <Picker.Item label="option1" value="1"/>
            <Picker.Item label="option2" value="2"/>
            <Picker.Item label="option3" value="3"/>
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 10,
    },
    input: {},
});

export default CustomInput;