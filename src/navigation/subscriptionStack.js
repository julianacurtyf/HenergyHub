import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SubscriptionScreen from '../screens/SubscriptionScreen';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

const SubsStack = ({navigation}) => {
    return(
        <Stack.Navigator screenOptions={{headerTitle: () => <Header navigation={navigation} title="Planos"/>, headerTintColor:"#444",  headerStyle: { backgroundColor: '#eee', height: 90}}}>
            <Stack.Screen name="Subscription1" component={SubscriptionScreen}/>
        </Stack.Navigator>
    );
}

export default SubsStack;