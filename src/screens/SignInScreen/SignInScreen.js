import React, { useEffect, useState } from 'react';
import { View, Image, useWindowDimensions, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Logo from '../../../assets/images/logo.jpeg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { MyStyles } from '../../../assets/style/MyStyles';

export default function SignInScreen({ navigation }) {
    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
      navigation.navigate('Home');
    };

    const onForgotPasswordPressed = () => {
      navigation.navigate('ForgotPassword');
    };

    return (
      <ScrollView>
      <View style={MyStyles.root}>
          <Image source={Logo} style={[MyStyles.logo, {height: height*0.3}]} resizeMode='contain'/>

          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <CustomInput placeholder="Número Conta"/>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <CustomInput placeholder="Senha" secureTextEntry/>
          </TouchableWithoutFeedback>

          <CustomButton text="Entrar" onPress={onSignInPressed}/>

          <CustomButton text="Não sabe o número da sua conta? Clique Aqui" onPress={onForgotPasswordPressed} type="TERTIARY"/>
      </View>
  </ScrollView>
    );
};


