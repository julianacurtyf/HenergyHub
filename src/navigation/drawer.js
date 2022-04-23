import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Dimensions } from "react-native";
import SignInStack from './signInStack';
import AnaliseStack from './analiseStack';
import HomeStack from './homeStack';
import VoteStack from './voteStack';
import SubsStack from './subscriptionStack';
import StatisticStack from './statisticStack';

const windowWidth = Dimensions.get('window').width;

const Drawer = createDrawerNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Sair" screenOptions={{drawerActiveTintColor:'#023047', drawerType: 'front', swipeEdgeWidth: 0, headerShown: false, drawerStyle: {backgroundColor: '#eee',width: windowWidth*0.6}}}>
                <Drawer.Screen name="Home" component={HomeStack} options={{ title: "Página Inicial" }}/>
                <Drawer.Screen name="Vote" component={VoteStack} options={{ title: "Votar" }}/>
                <Drawer.Screen name="Stats" component={StatisticStack} options={{ title: "Estatísticas" }}/>
                <Drawer.Screen name="Analise" component={AnaliseStack} options={{ title: "Análise Personalizada" }}/>
                <Drawer.Screen name="Sair" component={SignInStack}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;