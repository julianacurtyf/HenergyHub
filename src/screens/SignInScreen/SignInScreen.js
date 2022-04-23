import React, { useEffect, useState } from 'react';
import { View, Image, useWindowDimensions, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { MyStyles } from '../../../assets/style/MyStyles';

export default function SignInScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {height} = useWindowDimensions();
    var database = require('../../database/database.js');
    global.user = '';
    global.presidents = '';
    global.governors = '';
    global.update = false;

    const onSignInPressed = () => {
      database.getAllPresidents();
      database.getAllGovernors();
      database.verifyUserByEmailAndPassword(email, password, navigation);
    };

    const onForgotPasswordPressed = () => {
      console.warn("onForgotPasswordPressed");

      navigation.navigate('ForgotPassword');
    };

    const onSignUpPressed = () => {
        console.warn("onSignUpPressed");

        navigation.navigate('SignUp');
    };

    return (
      <ScrollView>
      <View style={MyStyles.root}>
          <Image source={Logo} style={[MyStyles.logo, {height: height*0.3}]} resizeMode='contain'/>
          
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <CustomInput placeholder="Email" onChangeText={(email) => setEmail(email)}/>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <CustomInput placeholder="Senha" onChangeText={(password) => setPassword(password)} secureTextEntry/>
          </TouchableWithoutFeedback>

          <CustomButton text="Entrar" onPress={onSignInPressed}/>

          <CustomButton text="Esqueceu sua senha?" onPress={onForgotPasswordPressed} type="TERTIARY"/>

          <CustomButton text="Não tem conta? Clique aqui" onPress={onSignUpPressed} type="TERTIARY"/>
      </View>
  </ScrollView>
    );
};


