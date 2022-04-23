import React from 'react';
import {View, TextInput} from 'react-native';
import { MyStyles } from '../../../assets/style/MyStyles';

const CustomInput = ({value, onChangeText, placeholder, secureTextEntry, keyboardType}) => {
    return(
        <View style={[MyStyles.inputContainer, {width: '100%'}]}>
                <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} secureTextEntry={secureTextEntry} keyboardType={keyboardType} placeholderTextColor='gray'/>
        </View>
    );
};

export default CustomInput;