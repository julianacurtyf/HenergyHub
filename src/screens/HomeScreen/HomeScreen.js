import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Image, StyleSheet, ImageBackground } from "react-native";
import { MyStyles } from '../../../assets/style/MyStyles';
import { Dimensions } from "react-native";
import prev_img from '../../../assets/images/home/prev.png';
import data_img from '../../../assets/images/home/data.png';
import faq_img from '../../../assets/images/home/faq.png';
import back_img from '../../../assets/images/home/back.jpg';

const HomeScreen = ({ route, navigation }) => {
    const windowWidth = Dimensions.get('window').width;

    return (
        <View style={MyStyles.root}>
            <ImageBackground source={back_img} resizeMode="cover" style={MyStyles.root}>
            <View style={MyStyles.containerTitle}>
                <Text style={MyStyles.home_text}>
                    Bem vindo, João Maria!
                </Text>
            </View>
            <View style={{ flexDirection: 'row', alignContent: 'space-between' }}>
                <View style={{ padding: 10, width: (windowWidth - 30) / 2  }}>
                    <Pressable onPress={() => navigation.navigate('Data')} style={{ height: (windowWidth - 30) / 2, backgroundColor: 'black', borderRadius: 10, padding: 10, justifyContent: 'center'}}>
                        <Image source={data_img} style={{ height: (windowWidth - 250) / 2, alignSelf: 'center' }} resizeMode='contain' />
                        <Text style={[MyStyles.textGray, { textAlign: 'center', paddingTop: 15 }]}>Dados de Consumo</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ padding: 10, width: (windowWidth - 30) / 2 }}>
                    <Pressable onPress={() => navigation.navigate('Stats')} style={{ height: (windowWidth - 30) / 2, backgroundColor: 'black', borderRadius: 10, padding: 10, justifyContent: 'center' }}>
                        <Image source={prev_img} style={{ height: (windowWidth - 250) / 2, alignSelf: 'center' }} resizeMode='contain' />
                        <Text style={[MyStyles.textGray, { textAlign: 'center', paddingTop: 15 }]}>Análise da Performance</Text>
                    </Pressable>
                </View>
                <View style={{ padding: 10, width: (windowWidth - 30) / 2 }}>
                    <Pressable onPress={() => navigation.navigate('Faq')} style={{ height: (windowWidth - 30) / 2, backgroundColor: 'black', borderRadius: 10, padding: 10, justifyContent: 'center' }}>
                        <Image source={faq_img} style={{ height: (windowWidth - 250) / 2, alignSelf: 'center' }} resizeMode='contain' />
                        <Text style={[MyStyles.textGray, { textAlign: 'center', paddingTop: 15 }]}>FAQ</Text>
                    </Pressable>
                </View>
            </View>
            </ImageBackground>
        </View>
    );
}

export default HomeScreen;