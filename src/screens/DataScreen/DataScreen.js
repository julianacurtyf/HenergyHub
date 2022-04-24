import React, { useState, useEffect } from "react";
import { RefreshControl, View, Text, ScrollView } from "react-native";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryLine, VictoryPie } from 'victory-native';
import CustomButton from '../../components/CustomButton';
import { MyStyles } from '../../../assets/style/MyStyles';

const DataScreen = ({ navigation }) => {

    return (
        <ScrollView>
                <View style={MyStyles.container}>
                <Text style={MyStyles.title}>Produção Mensal de Energia pelos Painéis Fotovoltaicos</Text>
                <View style={MyStyles.barChart}>
                    <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
                      <VictoryBar style={{ data: { fill: "#000" } }} data = {[{x: "Jan", y: 500},{x:"Fev", y: 600}, {x:"Mar", y: 550}]} />
                    </VictoryChart>
                </View>

                <Text style={MyStyles.title}>Consumo Mensal de Energia</Text>
                <View style={MyStyles.barChart}>
                    <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
                      <VictoryBar style={{ data: { fill: "#000" } }} data = {[{x: "Jan", y: 500},{x:"Fev", y: 600}, {x:"Mar", y: 550}]} />
                    </VictoryChart>
                </View>

                <Text style={MyStyles.title}>Distribuição do Consumo de Energia</Text>
                <View style={MyStyles.barChart}>
                <VictoryPie colorScale={"qualitative"}
                  data={[
                    { x: "Empresa", y: 75 },
                    { x: "Fotovoltaica", y: 25 }
                  ]}
                  radius={150}
                  style={{ labels: { fill: "#000", fontWeight: "bold" } }}
                />
                </View>
                <Text style={MyStyles.text}>Valor Poupado no Ano Atual: 65,72€</Text>
                
            </View>
        </ScrollView>
    );
}

export default DataScreen;