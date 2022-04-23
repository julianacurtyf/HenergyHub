import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { MyStyles } from '../../../assets/style/MyStyles';
import { Dimensions } from "react-native";
import data_img from '../../../assets/images/home/data.png';
import faq_img from '../../../assets/images/home/faq.png';
import prev_img from '../../../assets/images/home/prev.png';

const HomeScreen = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width;

    return (
        <View style={MyStyles.root}>
            <View style={MyStyles.containerTitle}>
                <Text style={MyStyles.title}>
                    {global.user.data.gender == 'F' ? 'Bem vinda' : 'Bem vindo'}, {global.user.data.first_name}!</Text>
                <Text style={MyStyles.subtitleSmall}>oi</Text>
            </View>
            <View style={{ flexDirection: 'row', alignContent: 'space-between' }}>
                <View style={{ padding: 10, width: (windowWidth - 30) / 2  }}>
                    <Pressable onPress={() => navigation.navigate('Vote')} style={{ height: (windowWidth - 30) / 2, backgroundColor: '#FB8500', borderRadius: 10, padding: 10, justifyContent: 'center'}}>
                        <Image source={prev_img} style={{ height: (windowWidth - 250) / 2, alignSelf: 'center' }} resizeMode='contain' />
                        <Text style={[MyStyles.textGray, { textAlign: 'center', paddingTop: 15 }]}>Previsão em tempo real</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ padding: 10, width: (windowWidth - 30) / 2 }}>
                    <Pressable onPress={() => navigation.navigate('Subscription')} style={{ height: (windowWidth - 30) / 2, backgroundColor: '#023047', borderRadius: 10, padding: 10, justifyContent: 'center' }}>
                        <Image source={data_img} style={{ height: (windowWidth - 250) / 2, alignSelf: 'center' }} resizeMode='contain' />
                        <Text style={[MyStyles.textGray, { textAlign: 'center', paddingTop: 15 }]}>Dados de consumo</Text>
                    </Pressable>
                </View>
                <View style={{ padding: 10, width: (windowWidth - 30) / 2 }}>
                    <Pressable onPress={() => navigation.navigate('Analise')} style={{ height: (windowWidth - 30) / 2, backgroundColor: '#FFB703', borderRadius: 10, padding: 10, justifyContent: 'center' }}>
                        <Image source={faq_img} style={{ height: (windowWidth - 250) / 2, alignSelf: 'center' }} resizeMode='contain' />
                        <Text style={[MyStyles.textGray, { textAlign: 'center', paddingTop: 15 }]}>FAQ</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default HomeScreen;