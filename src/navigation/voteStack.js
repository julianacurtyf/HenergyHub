import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VoteScreen from '../screens/VoteScreen';
import Header from '../components/Header';
import SaveVoteScreen from '../screens/SaveVoteScreen';

const Stack = createNativeStackNavigator();

const VoteStack = ({navigation}) => {
    return(
        <Stack.Navigator screenOptions={{headerTitle: () => <Header navigation={navigation} title="Votar"/>, headerTintColor:"#444",  headerStyle: { backgroundColor: '#eee', height: 90}}}>
            <Stack.Screen name="Vote1" component={VoteScreen}/>
            <Stack.Screen name="SaveVote" component={SaveVoteScreen} options={{headerTitle: () => <Header navigation={navigation} title="Votar" icon='false'/>, headerTintColor:"#444",  headerStyle: { backgroundColor: '#eee', height: 90}}}/>
        </Stack.Navigator>
    );
}

export default VoteStack;