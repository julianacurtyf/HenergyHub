import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { MyStyles } from '../../../assets/style/MyStyles';
import qs from 'qs';
import { Linking } from 'react-native';



export default function AnaliseScreen({ navigation }) {
    const [email, setEmail] = useState('');

    const sendEmail = (to, subject, body, options = {}) => {
        const { cc, bcc } = options;

        let url = `mailto:${to}`;

        // Create email link query
        const query = qs.stringify({
            subject: subject,
            body: body,
            cc: cc,
            bcc: bcc
        });

        if (query.length) {
            url += `?${query}`;
        }

        // check if we can use this link
        const canOpen = Linking.canOpenURL(url);

        if (!canOpen) {
            throw new Error('Provided URL can not be handled');
        }

        return Linking.openURL(url);
    }

    const onSendPressed = () => {
        console.warn("onSendPressed");
        sendEmail('meuvoto2022@meuvotobrasil.com.br', 'Análise Personalizada', email).then(() => { console.log('Your message was successfully sent!'); });
    };

    return (
        <View style={MyStyles.root}>
            <Text style={MyStyles.contentPurple}>Faça aqui o seu pedido detalhado que entraremos em contato com você.</Text>
            <View style={[MyStyles.inputContainer, { width: '100%', height: 100 }]}>
                <TextInput value={email} onChangeText={setEmail} placeholder='Texto' placeholderTextColor='gray' multiline />
            </View>

            <CustomButton onPress={onSendPressed} text="Enviar Mensagem" type="PRIMARY" />
        </View>
    );
};
