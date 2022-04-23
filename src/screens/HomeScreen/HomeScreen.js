import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Image } from "react-native";
import { MyStyles } from '../../../assets/style/MyStyles';
import firestore from '@react-native-firebase/firestore';
import { Dimensions } from "react-native";
import email_img from '../../../assets/images/home/email.png';
import plan_img from '../../../assets/images/home/plan.png';
import stats_img from '../../../assets/images/home/stats.png';
import vote_img from '../../../assets/images/home/vote.png';

const HomeScreen = ({ route, navigation }) => {
    const windowWidth = Dimensions.get('window').width;

    return (
        <View style={MyStyles.root}>
            <View style={MyStyles.containerTitle}>
                <Text style={MyStyles.title}>
                    {global.user.data.gender == 'F' ? 'Bem vinda' : 'Bem vindo'}, {global.user.data.first_name}!</Text>
                <Text style={MyStyles.subtitleSmall}>Aqui você consegue ver, de maneira imparcial, as intenções de voto para as eleições de 2022. E, lembre-se, os seus dados não serão comercializados e seu email não será inserido em nenhuma campanha.</Text>
            </View>
            <View style={{ flexDirection: 'row', alignContent: 'space-between' }}>
                <View style={{ padding: 10, width: (windowWidth - 30) / 2  }}>
                    <Pressable onPress={() => navigation.navigate('Vote')} style={{ height: (windowWidth - 30) / 2, backgroundColor: '#FB8500', borderRadius: 10, padding: 10, justifyContent: 'center'}}>
                        <Image source={vote_img} style={{ height: (windowWidth - 250) / 2, alignSelf: 'center' }} resizeMode='contain' />
                        <Text style={[MyStyles.textGray, { textAlign: 'center', paddingTop: 15 }]}>Votar</Text>
                    </Pressable>
                </View>
                <View style={{ padding: 10, width: (windowWidth - 30) / 2 }}>
                    <Pressable onPress={() => navigation.navigate('Stats')} style={{ height: (windowWidth - 30) / 2, backgroundColor: '#219EBC', borderRadius: 10, padding: 10, justifyContent: 'center' }}>
                        <Image source={stats_img} style={{ height: (windowWidth - 250) / 2, alignSelf: 'center' }} resizeMode='contain' />
                        <Text style={[MyStyles.textGray, { textAlign: 'center', paddingTop: 15 }]}>Estatísticas</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ padding: 10, width: (windowWidth - 30) / 2 }}>
                    <Pressable onPress={() => navigation.navigate('Subscription')} style={{ height: (windowWidth - 30) / 2, backgroundColor: '#023047', borderRadius: 10, padding: 10, justifyContent: 'center' }}>
                        <Image source={plan_img} style={{ height: (windowWidth - 250) / 2, alignSelf: 'center' }} resizeMode='contain' />
                        <Text style={[MyStyles.textGray, { textAlign: 'center', paddingTop: 15 }]}>Mudar de plano</Text>
                    </Pressable>
                </View>
                <View style={{ padding: 10, width: (windowWidth - 30) / 2 }}>
                    <Pressable onPress={() => navigation.navigate('Analise')} style={{ height: (windowWidth - 30) / 2, backgroundColor: '#FFB703', borderRadius: 10, padding: 10, justifyContent: 'center' }}>
                        <Image source={email_img} style={{ height: (windowWidth - 250) / 2, alignSelf: 'center' }} resizeMode='contain' />
                        <Text style={[MyStyles.textGray, { textAlign: 'center', paddingTop: 15 }]}>Análise Personalizada</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default HomeScreen;