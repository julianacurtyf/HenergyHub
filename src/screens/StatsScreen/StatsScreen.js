import React, { useState, useEffect } from "react";
import { RefreshControl, View, Text, ScrollView } from "react-native";
import MyBarChart from '../../components/BarChart';
import { MyStyles } from '../../../assets/style/MyStyles';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryLine } from 'victory-native';
import { Picker } from "@react-native-picker/picker";
import CustomButton from '../../components/CustomButton';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

const StatsScreen = ({navigation}) => {
    const [president_name, setPresidentName] = useState([]);
    const [president_vote, setPresidentVote] = useState([]);
    const [president_date, setPresidentDate] = useState([]);
    const [president_month, setPresidentMonth] = useState([]);
    const [president_names, setPresidentNames] = useState([]);
    const [data_president, setDataPresident] = useState([]);
    const [governor_name, setGovernorName] = useState([]);
    const [governor_vote, setGovernorVote] = useState([]);
    const [governor_date, setGovernorDate] = useState([]);
    const [governor_month, setGovernorMonth] = useState([]);
    const [governor_names, setGovernorNames] = useState([]);
    const [data_governor, setDataGovernor] = useState([]);
    const [uf, setUf] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    const [refresh, setRefresh] = useState(false);

    const onFilterPressed = () => {
        navigation.navigate('Filters1');
    };

    if(global.update == true){
        setPresidentName([]);
        setPresidentNames([]);
        setPresidentVote([]);
        setPresidentDate([]);
        setPresidentMonth([]);
        setDataPresident([]);
        setGovernorName([]);
        setGovernorNames([]);
        setGovernorVote([]);
        setGovernorMonth([]);
        setGovernorDate([]);
        setDataGovernor([]);
        wait(2000).then(() => {setRefresh(1-refresh)});
        global.update = false;
    }

    function compare( a, b ) {
        if ( a.x.substring(0,2) < b.x.substring(0,2) ){
          return -1;
        }
        if ( a.x.substring(0,2) > b.x.substring(0,2) ){
          return 1;
        }
        return 0;
      }

    async function getPresident() {
        const names = [];
        const date = [];
        const month = [];
        const name = [];
        const vote = [];

        await firestore()
        .collection('presidents_date')
        .get()
        .then(querySnapshot => {
            let n = "";
            querySnapshot.forEach(documentSnapshot => {
                if(documentSnapshot.data().n_votes > 0){
                if(documentSnapshot.data().name != n && !names.includes(documentSnapshot.data().name)){
                    n = documentSnapshot.data().name;
                    names.push(n)
                }
                name.push(documentSnapshot.data().name);
                vote.push(documentSnapshot.data().n_votes);
                date.push(documentSnapshot.data().date);
                month.push(documentSnapshot.data().month);
            }
             });
        });

        setPresidentNames(names);
        setPresidentDate(date);
        setPresidentVote(vote);
        setPresidentName(name);
        setPresidentMonth(month);
    }

    async function getGovernor(uf) {
        const names = [];
        const date = [];
        const month = [];
        const name = [];
        const vote = [];

        await firestore()
        .collection('governors_date')
        .where('uf','==',uf)
        .get()
        .then(querySnapshot => {
            let n = "";
            querySnapshot.forEach(documentSnapshot => {
                if(documentSnapshot.data().n_votes > 0){
                if(documentSnapshot.data().name != n && !names.includes(documentSnapshot.data().name)){
                    n = documentSnapshot.data().name;
                    names.push(n)
                }
                name.push(documentSnapshot.data().name);
                vote.push(documentSnapshot.data().n_votes);
                date.push(documentSnapshot.data().date);
                month.push(documentSnapshot.data().month);
                }
             });
        });

        setGovernorNames(names);
        setGovernorDate(date);
        setGovernorVote(vote);
        setGovernorName(name);
        setGovernorMonth(month);
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => {setRefreshing(false)});
        wait(2000).then(() => {setRefresh(1-refresh)});
    }, []);

    useEffect(() => {
        if(uf == ''){
            setUf(global.user.data.uf);
        }
    }, []);

    useEffect(() => {
        if (president_names.length == 0) {
            getPresident()
        };
      }, [refresh]);

    useEffect(() => {
        if (governor_names.length == 0) {
            getGovernor(uf)
        };
      }, [uf, refresh]);

    useEffect(() => {
        if(data_president.length == 0 && president_vote.length > 0 && president_vote.length == president_name.length && president_vote.length == president_date.length){
            let data = [];
            let final_data = [];
            for(var i = 0; i < president_names.length; i++){
                data = []
                for(var j = 0; j < president_date.length; j++){
                    if(president_name[j] == president_names[i]){
                        data.push({x: president_date[j] == undefined ? i : president_date[j].toString().concat('/'.concat(president_month[j].toString())), y: president_vote[j] == undefined ? i : president_vote[j]});
                    }
                }
                data.sort(compare);
                final_data.push(data);
            }

            setDataPresident(final_data);
        }
    }, [refresh]);

    useEffect(() => {
        if(data_governor.length == 0 && governor_vote.length > 0 && governor_vote.length == governor_name.length && governor_vote.length == governor_date.length){
            let data = [];
            let final_data = [];
            for(var i = 0; i < governor_names.length; i++){
                data = []
                for(var j = 0; j < governor_date.length; j++){
                    if(governor_name[j] == governor_names[i]){
                        data.push({x: governor_date[j] == undefined ? i : governor_date[j].toString().concat('/'.concat(governor_month[j].toString())), y: governor_vote[j] == undefined ? i : governor_vote[j]});
                    }
                }
                data.sort(compare);
                final_data.push(data);
            }

            setDataGovernor(final_data);
        }
    }, [uf, refresh]);

    function renderPresident() {

        const arr = data_president;
        const arr2 = president_names;
        console.log(arr);
        if(arr.length == 0){
            return <VictoryLine labels={() => 'Presidente'} data = {[{x: "Dia", y:"Votos"},{x:"Dia", y: "Votos"}]} />;
        }
        
        return arr.map((obj, index) => {
          // Compose a unique key for the text element. A unique key is need when 
          // rendering lists of components
          const key = index;
      
          // Add return to ensure the text element is returned from map callback
          return <VictoryLine key={key} labels={({ datum }) => arr2[index] == undefined ? 'err' : arr2[index]} data = {obj == undefined ? [{x: 1, y:1},{x:2, y: 1}] : obj} />;
        });
      }

      function renderGovernor() {

        const arr = data_governor;
        const arr2 = governor_names;

        if(arr.length == 0){
            return <VictoryLine labels={() => 'Governador'} data = {[{x: "Dia", y:"Votos"},{x:"Dia", y: "Votos"}]} />;
        }
      
        return arr.map((obj, index) => {
          // Compose a unique key for the text element. A unique key is need when 
          // rendering lists of components
          const key = index;
      
          // Add return to ensure the text element is returned from map callback
          return <VictoryLine key={key} labels={({ datum }) => arr2[index] == undefined ? 'err' : arr2[index]} data = {obj == undefined ? [{x: 1, y:1},{x:2, y: 1}] : obj} />;
        });
      }

    return (
        <ScrollView refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }>
            <View style={MyStyles.container1}>
                <Text style={MyStyles.subtitleGray}>{global.user.data.first_name}, as atualizações em tempo real das intenções de voto para governador de e presidente são:</Text>
                <View style={MyStyles.container}>
                <View style= {MyStyles.containerText}>
                <Text style={MyStyles.text}>Governador</Text>
                <Picker selectedValue={uf}
                enabled={global.user.data.plan == 'basic' ? false : true}
                onValueChange={(itemValue, itemIndex) => {
                    setUf(itemValue);
                    setGovernorName([]);
                    setGovernorVote([]);
                    setGovernorDate([]);
                    setGovernorMonth([]);
                    setGovernorNames([]);
                    setDataGovernor([]);
                    wait(2000).then(() => {setRefresh(1-refresh)});
                }
                }
                itemStyle={{ fontSize: 14, height: 50, width: 130 }}>
                    <Picker.Item label="AC" value="AC" />
                    <Picker.Item label="AL" value="AL" />
                    <Picker.Item label="AP" value="AP" />
                    <Picker.Item label="AM" value="AM" />
                    <Picker.Item label="BA" value="BA" />
                    <Picker.Item label="CE" value="CE" />
                    <Picker.Item label="DF" value="DF" />
                    <Picker.Item label="ES" value="ES" />
                    <Picker.Item label="GO" value="GO" />
                    <Picker.Item label="MA" value="MA" />
                    <Picker.Item label="MT" value="MT" />
                    <Picker.Item label="MS" value="MS" />
                    <Picker.Item label="MG" value="MG" />
                    <Picker.Item label="PA" value="PA" />
                    <Picker.Item label="PB" value="PB" />
                    <Picker.Item label="PR" value="PR" />
                    <Picker.Item label="PE" value="PE" />
                    <Picker.Item label="PI" value="PI" />
                    <Picker.Item label="RJ" value="RJ" />
                    <Picker.Item label="RN" value="RN" />
                    <Picker.Item label="RS" value="RS" />
                    <Picker.Item label="RO" value="RO" />
                    <Picker.Item label="RR" value="RR" />
                    <Picker.Item label="SC" value="SC" />
                    <Picker.Item label="SP" value="SP" />
                    <Picker.Item label="SE" value="SE" />
                    <Picker.Item label="TO" value="TO" />
                </Picker>
                </View>
                <View style= {MyStyles.containerText}>
                <Text style={MyStyles.text}>Governador Por Dia</Text>
                </View>
                <View style={MyStyles.barChart}>
                    <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
                    {renderGovernor()}
                    </VictoryChart>
                </View>

                <View style= {MyStyles.containerText}>
                <Text style={MyStyles.text}>Presidente Por Dia</Text>
                </View>
                <View style={MyStyles.barChart}>
                    <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
                    {renderPresident()}
                    </VictoryChart>
                </View>

                <CustomButton text="Filtros" onPress={onFilterPressed} type="TERTIARY"/>
                
                </View>

            </View>
        </ScrollView>
    );
}

export default StatsScreen;