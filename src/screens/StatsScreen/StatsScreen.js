import React, { useState, useEffect } from "react";
import { RefreshControl, View, Text, ScrollView, Image, useWindowDimensions } from "react-native";
import { MyStyles } from '../../../assets/style/MyStyles';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryLine, VictoryLabel, VictoryLegend } from 'victory-native';
import CustomButton from '../../components/CustomButton';
import Anual from '../../../assets/images/anual.png';
import Daily from '../../../assets/images/daily.png';

const StatsScreen = ({navigation}) => {
    const {height} = useWindowDimensions();

    return (
        <ScrollView>
                <View style={MyStyles.container}>
                <Text style={MyStyles.title}>Previsão da Potência Gerada</Text>
                
                <View style={MyStyles.barChart}>
                    <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
                    <VictoryAxis
                        tickLabelComponent={<VictoryLabel angle={45}/>}
                        axisLabelComponent={<VictoryLabel dy={22} />}
                        label="Hora"
                    />
                    <VictoryAxis dependentAxis label="Potência Produzida" axisLabelComponent={<VictoryLabel dy={-30} />}/>
                    <VictoryLegend x={210} y={30}
                    orientation="horizontal"
                    gutter={20}
                    style={{ border: { stroke: "black" } }}
                    colorScale={[ "black", "red" ]}
                    data={[
                        { name: "Dados" }, { name: "Previsão" }
                    ]}
                    />
                        <VictoryLine
                            data = {[{x:'00:00', y: 0},
                        {x:'01:00', y: 0},
                        {x:'02:00', y: 0},
                        {x:'03:00', y: 0},
                        {x:'04:00', y: 0},
                        {x:'05:00', y: 0},
                        {x:'06:00', y: 0},
                        {x:'07:00', y: 0},
                        {x:'08:00', y: 0.102},
                        {x:'09:00', y: 0.11},
                        {x:'10:00', y: 0.234},
                        {x:'11:00', y: 0.232},
                        {x:'12:00', y: 0.224},
                        {x:'13:00', y: 0.176},
                        {x:'14:00', y: 0.048},
                        {x:'15:00', y: 0.026},
                        {x:'16:00', y: 0.005},
                        {x:'17:00', y: 0},
                        {x:'18:00', y: 0},
                        {x:'20:00', y: 0},
                        {x:'21:00', y: 0},
                        {x:'22:00', y: 0},
                        {x:'23:00', y: 0}
                        ]}
                        />
                        <VictoryLine
                        style={{ data: { stroke: "red" } }}
                            data = {[{x:'00:00', y: 0},
                        {x:'01:00', y: 0},
                        {x:'02:00', y: 0},
                        {x:'03:00', y: 0},
                        {x:'04:00', y: 0},
                        {x:'05:00', y: 0},
                        {x:'06:00', y: 0},
                        {x:'07:00', y: 0},
                        {x:'08:00', y: 0},
                        {x:'09:00', y: 0.114},
                        {x:'10:00', y: 0.308},
                        {x:'11:00', y: 0.479},
                        {x:'12:00', y: 0.404},
                        {x:'13:00', y: 0.207},
                        {x:'14:00', y: 0.068},
                        {x:'15:00', y: 0},
                        {x:'16:00', y: 0},
                        {x:'17:00', y: 0},
                        {x:'18:00', y: 0},
                        {x:'20:00', y: 0},
                        {x:'21:00', y: 0},
                        {x:'22:00', y: 0},
                        {x:'23:00', y: 0}
                        ]}
                        />
                    </VictoryChart>
                </View>
                <Text style={MyStyles.title}>Tendência de Produção Diária</Text>
                
                <View style={MyStyles.barChart}>
                <Image source={Anual} style={[{alignSelf: 'center'}]} resizeMode='contain'/>
                </View>
                <Text style={MyStyles.title}>Tendência de Produção Anual</Text>
                
                <View style={MyStyles.barChart}>
                <Image source={Daily} style={[{alignSelf: 'center'}]} resizeMode='contain'/>
                </View>

            </View>
        </ScrollView>
    );
}

export default StatsScreen;