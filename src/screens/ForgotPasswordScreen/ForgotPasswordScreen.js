import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { MyStyles } from '../../../assets/style/MyStyles';
import RNSmtpMailer from "react-native-smtp-mailer";


export default function ForgotPasswordScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState(1234);

    GenerateRandomNumber = () => {

        var RandomNumber = Math.floor(Math.random() * 9999) + 1000;

        setCode(RandomNumber);
    }
    useEffect(() => {
        if (code == 1234) {
            GenerateRandomNumber();
        }
    }, []);

    const handleSendCode = () => {

        GenerateRandomNumber();
        console.log(code);
        RNSmtpMailer.sendMail({
            mailhost: "smtpout.secureserver.net",
            port: "465",
            ssl: true, // optional. if false, then TLS is enabled. Its true by default in android. In iOS TLS/SSL is determined automatically, and this field doesn't affect anything
            username: "meuvoto2022@meuvotobrasil.com.br",
            password: "HLoeur0558ffjg214094dlfpr",
            fromName: "Meu voto", // optional
            replyTo: "meuvoto2022@meuvotobrasil.com.br", // optional
            recipients: email,
            subject: "MeuVoto - Trocar a senha",
            htmlBody: code.toString(),
          })
            .then(success => console.log(success))
            .catch(err => console.log(err));
        //sendEmail(email, 'MeuVoto - Trocar a senha', code).then(() => { console.log('Your message was successfully sent!'); });

        navigation.navigate('NewPassword', {code_pass: code, email: email})
    }

    return (
        <View style={MyStyles.root}>
            <Text style={MyStyles.title}>Recuperar Senha</Text>

            <CustomInput placeholder="Email" value={email} onChangeText={(email) => setEmail(email)} />

            <CustomButton onPress={handleSendCode} text="Enviar Código" type="PRIMARY" />
            <CustomButton onPress={() => navigation.navigate('SignIn')} text="Voltar" type="TERTIARY" />
        </View>
    );
};


