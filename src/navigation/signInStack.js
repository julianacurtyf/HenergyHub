import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';

const Stack = createNativeStackNavigator();

const SignInStack = ({navigation}) => {
    return(
        <Stack.Navigator initialRouteName="SignIn" screenOptions={{headerStyle: { backgroundColor: '#eee', height: 90}, headerTintColor: '#444'}}>
            <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: "" }}/>
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: "" }}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: "" }}/>
            <Stack.Screen name="NewPassword" component={NewPasswordScreen} options={{ title: "" }}/>
        </Stack.Navigator>
    );
}

export default SignInStack;