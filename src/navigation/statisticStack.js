import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StatsScreen from '../screens/StatsScreen';
import FilterScreen from '../screens/FilterScreen';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

const StatisticStack = ({navigation}) => {
    return(
        <Stack.Navigator screenOptions={{headerTitle: () => <Header navigation={navigation} title="Estatísticas" />, headerTintColor:"#444",  headerStyle: { backgroundColor: '#eee', height: 90}}}>
            <Stack.Screen name="Stats1" component={StatsScreen}/>
            <Stack.Screen name="Filters1" component={FilterScreen} options={{headerTitle: () => <Header navigation={navigation} title="Estatísticas" icon='false'/>, headerTintColor:"#444",  headerStyle: { backgroundColor: '#eee', height: 90}}}/>
        </Stack.Navigator>
    );
}

export default StatisticStack;