import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { MyStyles } from '../../../assets/style/MyStyles';

export default function ForgotPasswordScreen({ navigation }) {

    return (
        <View style={MyStyles.root}>
            <Text style={MyStyles.title1}>Recuperar Número da Conta</Text>

            <CustomInput placeholder="Email" />

            <CustomButton text="Enviar Código" type="PRIMARY" />
            <CustomButton onPress={() => navigation.navigate('SignIn')} text="Voltar" type="TERTIARY" />
        </View>
    );
};


