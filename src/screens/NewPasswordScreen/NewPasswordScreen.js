import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { MyStyles } from '../../../assets/style/MyStyles';
import AlertButton from '../../components/AlertButton';

export default function NewPasswordScreen({ navigation, route }) {
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');

    var database = require('../../database/database.js');

    const onSubmitPressed = () => {

        if (route.params.code_pass == code) {
            database.updateUserPass(route.params.email, password);
            navigation.navigate('SignIn');
        }
        else {
            AlertButton('Nova senha', 'O código é inválido.');
        }

    };

    return (
        <View style={MyStyles.root}>
            <Text style={MyStyles.title}>Definir Nova Senha</Text>

            <CustomInput placeholder="Código" value={code} onChangeText={(code) => setCode(code)} />
            <CustomInput placeholder="Nova Senha" value={password} onChangeText={(password) => setPassword(password)} />

            <CustomButton onPress={onSubmitPressed} text="Definir" type="PRIMARY" />
        </View>
    );
};
