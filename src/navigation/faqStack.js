import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FaqScreen from '../screens/FaqScreen';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

const FaqStack = ({navigation}) => {
    return(
        <Stack.Navigator screenOptions={{headerTitle: () => <Header navigation={navigation} title="FAQ"/>, headerTintColor:"#444",  headerStyle: { backgroundColor: '#000', height: 90}}}>
            <Stack.Screen name="Faq1" component={FaqScreen}/>
        </Stack.Navigator>
    );
}

export default FaqStack;