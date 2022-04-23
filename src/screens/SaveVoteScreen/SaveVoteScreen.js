import React, { useState, useEffect } from "react";
import { RefreshControl, View, Text, ScrollView } from "react-native";
import { MyStyles } from '../../../assets/style/MyStyles';

const SaveVoteScreen = ({ navigation }) => {
    const [refreshing, setRefreshing] = useState(true);

    return (
        <ScrollView refreshControl={
            <RefreshControl
              refreshing={refreshing}
            />
          }>
            <View style={MyStyles.container1}>
                <Text style={MyStyles.subtitleGray}>Salvando seu voto...</Text>
            </View>
        </ScrollView>
    );
}

export default SaveVoteScreen;