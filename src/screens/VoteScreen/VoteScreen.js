import React, { useState, useEffect } from "react";
import { RefreshControl, View, Text, ScrollView } from "react-native";
import MyCarousel from '../../components/Carousel';
import CustomButton from '../../components/CustomButton';
import { MyStyles } from '../../../assets/style/MyStyles';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

const VoteScreen = ({ navigation }) => {
    const [refreshing, setRefreshing] = useState(false);
    var database = require('../../database/database.js');

    const onVoteGovernorPressed = () => {
        database.updateUserVoteGovernor(global.activeIndexGov, navigation);
        global.update = true;
    }

    const onVotePresidentPressed = () => {
        database.updateUserVotePresident(global.activeIndexPres, navigation);
        global.update = true;
    };

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <ScrollView refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }>
            <View style={MyStyles.container1}>
                <Text style={MyStyles.subtitleGray}>Selecione o seu candidato para simular o seu voto:</Text>
                <View style={MyStyles.container}>
                    <View style={MyStyles.containerText}>
                        <Text style={MyStyles.text}>Governador</Text>
                    </View>
                    <View style={MyStyles.carouselContainer} >
                        <MyCarousel type='gov'/>
                    </View>
                    <View style={MyStyles.button}>
                        <CustomButton text="Votar Governador" onPress={onVoteGovernorPressed} />
                    </View>
                    <View style={MyStyles.containerText}>
                        <Text style={MyStyles.text}>Presidente</Text>
                    </View>
                    <View style={MyStyles.carouselContainer} >
                        <MyCarousel type='pres'/>
                    </View>
                    <View style={MyStyles.button}>
                        <CustomButton text="Votar Presidente" onPress={onVotePresidentPressed} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default VoteScreen;