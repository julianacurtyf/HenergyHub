import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnaliseScreen from '../screens/AnaliseScreen';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

const AnaliseStack = ({navigation}) => {
    return(
        <Stack.Navigator screenOptions={{headerTitle: () => <Header navigation={navigation} title="Análise Personalizada"/>, headerTintColor:"#444",  headerStyle: { backgroundColor: '#eee', height: 90}}}>
            <Stack.Screen name="Analise1" component={AnaliseScreen}/>
        </Stack.Navigator>
    );
}

export default AnaliseStack;