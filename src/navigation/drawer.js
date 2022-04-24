import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Dimensions } from "react-native";
import SignInStack from './signInStack';
import FaqStack from './faqStack';
import HomeStack from './homeStack';
import DataStack from './dataStack';
import StatisticStack from './statisticStack';

const windowWidth = Dimensions.get('window').width;

const Drawer = createDrawerNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Sair" screenOptions={{drawerActiveTintColor:'#000', drawerType: 'front', swipeEdgeWidth: 0, headerShown: false, drawerStyle: {backgroundColor: '#eee',width: windowWidth*0.6}}}>
                <Drawer.Screen name="Home" component={HomeStack} options={{ title: "Página Inicial" }}/>
                <Drawer.Screen name="Data" component={DataStack} options={{ title: "Dados" }}/>
                <Drawer.Screen name="Stats" component={StatisticStack} options={{ title: "Performance" }}/>
                <Drawer.Screen name="Faq" component={FaqStack} options={{ title: "FAQ" }}/>
                <Drawer.Screen name="Sair" component={SignInStack}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;