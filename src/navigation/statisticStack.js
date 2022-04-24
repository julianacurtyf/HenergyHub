import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StatsScreen from '../screens/StatsScreen';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

const StatisticStack = ({navigation}) => {
    return(
        <Stack.Navigator screenOptions={{headerTitle: () => <Header navigation={navigation} title="Performance dos Painéis Solares" />, headerTintColor:"#444",  headerStyle: { backgroundColor: '#000', height: 90}}}>
            <Stack.Screen name="Stats1" component={StatsScreen}/>
        </Stack.Navigator>
    );
}

export default StatisticStack;