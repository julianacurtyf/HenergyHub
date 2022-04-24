import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { MyStyles } from '../../../assets/style/MyStyles';

export default function FaqScreen({ navigation }) {


    return (
        <View style={MyStyles.root}>
            <Text style={MyStyles.contentPurple}>Pergunta 1?</Text>
            <View style={[MyStyles.inputContainer, { width: '100%', height: 70 }]}>
            <Text style={MyStyles.content}>Resposta 1</Text>
            </View>

            <Text style={MyStyles.contentPurple}>Pergunta 2?</Text>
            <View style={[MyStyles.inputContainer, { width: '100%', height: 70 }]}>
            <Text style={MyStyles.content}>Resposta 2</Text>
            </View>

            <Text style={MyStyles.contentPurple}>Pergunta 3?</Text>
            <View style={[MyStyles.inputContainer, { width: '100%', height: 70 }]}>
            <Text style={MyStyles.content}>Resposta 3</Text>
            </View>

        </View>
    );
};
