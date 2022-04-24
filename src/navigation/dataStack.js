import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DataScreen from '../screens/DataScreen';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

const DataStack = ({navigation}) => {
    return(
        <Stack.Navigator screenOptions={{headerTitle: () => <Header navigation={navigation} title="Dados"/>, headerTintColor:"#444",  headerStyle: { backgroundColor: '#000', height: 90}}}>
            <Stack.Screen name="Data1" component={DataScreen}/>
        </Stack.Navigator>
    );
}

export default DataStack;