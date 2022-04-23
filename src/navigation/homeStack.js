import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

const HomeStack = ({navigation}) => {
    return(
        <Stack.Navigator screenOptions={{headerTitle: () => <Header navigation={navigation} title="" img="true"/>, headerTintColor:"#444",  headerStyle: { backgroundColor: '#eee', height: 90}}}>
            <Stack.Screen name="Home1" component={HomeScreen}/>
        </Stack.Navigator>
    );
}

export default HomeStack;