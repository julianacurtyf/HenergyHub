import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, TextInput, ScrollView, Keyboard } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import CustomButton from '../../components/CustomButton';
import { Picker } from '@react-native-picker/picker';
import { Formik } from 'formik';
import * as yup from 'yup';
import { MyStyles } from '../../../assets/style/MyStyles';
import AlertButton from '../../components/AlertButton';

const reviewSchema = yup.object({
    firstName: yup.string().required("O campo é obrigatório."),
    lastName: yup.string().required("O campo é obrigatório."),
    cpf: yup.number("O CPF deve ser um número.").required("O campo é obrigatório.").min(11, "O cpf precisa ter 11 caracteres."),
    cep: yup.number("O CEP deve ser um número.").required("O campo é obrigatório."),
    email: yup.string().email("E-mail inválido.").required("O campo é obrigatório."),
    password: yup.string().required("O campo é obrigatório.").min(8, "A senha precisa ter um mínimo de 8 caracteres."),
    age: yup.number().required("O campo é obrigatório.").positive("O campo deve ser positivo.").integer("O campo deve ser um número inteiro.").min(16, "A idade mínima deve ser 16 anos."),
});


export default function SignUpScreen({ navigation }) {
    global.user = '';
    global.presidents = '';
    global.governors = '';
    global.update = false;

    var database = require('../../database/database.js');

    const onRegisterPressed = (values, navigation) => {

            database.getAllPresidents();
            database.getAllGovernors();
            AlertButton('Cookies', 'Os seus dados não serão utilizados comercialmente.');
            
            database.insertUser(values, navigation);
            //database.verifyUserByEmailAndPassword(values.email, values.password, navigation, values);
       
    };


    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    };

    return (
        <ScrollView>
            <View style={MyStyles.containerTitle}>
                <Text style={MyStyles.title}>Criar Conta</Text>
            </View>
            <View style={{ paddingTop: 20 }}>
                <Formik
                    initialValues={{ firstName: '', lastName: '', cpf: '', email: '', password: '', age: '', cep: '', uf: 'AC', gender: 'F', scholar: 'Ensino Fundamental Incompleto', race: 'Branca', journalist: 'Não' }}
                    validationSchema={reviewSchema}
                    onSubmit={(values, actions) => {
                        actions.resetForm();
                        onRegisterPressed(values, navigation);
                    }}
                >
                    {props => (
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View>
                                <Text style={MyStyles.descriptionInput}>Primeiro Nome:</Text>
                                <View style={MyStyles.inputContainer}>
                                    <TextInput
                                        placeholder='Primeiro Nome'
                                        placeholderTextColor='gray'
                                        onChangeText={props.handleChange('firstName')}
                                        value={props.values.firstName}
                                    />
                                </View>
                                <Text style={MyStyles.errorText}>{props.touched.firstName && props.errors.firstName}</Text>
                                <Text style={MyStyles.descriptionInput}>Último Nome:</Text>
                                <View style={MyStyles.inputContainer}>
                                    <TextInput
                                        placeholder='Último Nome'
                                        placeholderTextColor='gray'
                                        onChangeText={props.handleChange('lastName')}
                                        value={props.values.lastName}
                                    />
                                </View>
                                <Text style={MyStyles.errorText}>{props.touched.lastName && props.errors.lastName}</Text>
                                <Text style={MyStyles.descriptionInput}>CC:</Text>
                                <View style={MyStyles.inputContainer}>
                                    <TextInput
                                        placeholder='CPF'
                                        placeholderTextColor='gray'
                                        onChangeText={props.handleChange('cpf')}
                                        value={props.values.cpf}
                                        keyboardType='numeric'
                                    />
                                </View>
                                <Text style={MyStyles.errorText}>{props.touched.cpf && props.errors.cpf}</Text>
                                <Text style={MyStyles.descriptionInput}>Email:</Text>
                                <View style={MyStyles.inputContainer}>
                                    <TextInput
                                        placeholder='Email'
                                        placeholderTextColor='gray'
                                        onChangeText={props.handleChange('email')}
                                        value={props.values.email}
                                        keyboardType='email-address'
                                    />
                                </View>
                                <Text style={MyStyles.errorText}>{props.touched.email && props.errors.email}</Text>
                                <Text style={MyStyles.descriptionInput}>Senha:</Text>
                                <View style={MyStyles.inputContainer}>
                                    <TextInput
                                        placeholder='Senha'
                                        placeholderTextColor='gray'
                                        onChangeText={props.handleChange('password')}
                                        value={props.values.password}
                                        secureTextEntry
                                    />
                                </View >
                                <Text style={MyStyles.errorText}>{props.touched.password && props.errors.password}</Text>
                                <Text style={MyStyles.descriptionInput}>Idade:</Text>
                                <View style={MyStyles.inputContainer}>
                                    <TextInput
                                        placeholder='Idade'
                                        placeholderTextColor='gray'
                                        onChangeText={props.handleChange('age')}
                                        value={props.values.age}
                                        keyboardType='numeric'
                                    />
                                </View >
                                <Text style={MyStyles.errorText}>{props.touched.age && props.errors.age}</Text>
                                <Text style={MyStyles.descriptionInput}>CEP:</Text>
                                <View style={MyStyles.inputContainer}>
                                    <TextInput
                                        placeholder='CEP'
                                        placeholderTextColor='gray'
                                        onChangeText={props.handleChange('cep')}
                                        value={props.values.cep}
                                        keyboardType='numeric'
                                    />
                                </View >
                                <Text style={MyStyles.errorText}>{props.touched.age && props.errors.age}</Text>
                                <Text style={MyStyles.descriptionInput}>Estado (UF):</Text>
                                <View style={{ padding: 10 }}>
                                    <Picker
                                        selectedValue={props.values.uf}
                                        onValueChange={props.handleChange('uf')}
                                        itemStyle={{ fontSize: RFValue(16, 844), height: 50, width: 100 }}
                                    >
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
                                <Text style={MyStyles.descriptionInput}>Gênero:</Text>
                                <View style={{ padding: 10 }}>
                                    <Picker
                                        selectedValue={props.values.gender}
                                        onValueChange={props.handleChange('gender')}
                                        itemStyle={{ fontSize: RFValue(16, 844), height: 50, width: 130 }}
                                    >
                                        <Picker.Item label="Feminino" value="F" />
                                        <Picker.Item label="Masculino" value="M" />
                                        <Picker.Item label="Outro" value="Outro" />
                                    </Picker>
                                </View>
                                <Text style={MyStyles.descriptionInput}>Escolaridade:</Text>
                                <View style={{ padding: 10 }}>
                                    <Picker
                                        selectedValue={props.values.scholar}
                                        onValueChange={props.handleChange('scholar')}
                                        itemStyle={{ fontSize: RFValue(16, 844), height: 50, width: 260 }}
                                    >
                                        <Picker.Item label="Ensino Fundamental Incompleto" value="Fundamental Incompleto" />
                                        <Picker.Item label="Ensino Fundamental Completo" value="Fundamental Completo" />
                                        <Picker.Item label="Ensino Médio Incompleto" value="Ensino Médio Incompleto" />
                                        <Picker.Item label="Ensino Médio Completo" value="Ensino Médio Completo" />
                                        <Picker.Item label="Ensino Superior Incompleto" value="Ensino Superior Incompleto" />
                                        <Picker.Item label="Ensino Superior Completo" value="Ensino Superior Completo" />
                                        <Picker.Item label="Pós Graduação" value="Pós Graduação" />
                                    </Picker>
                                </View>
                                <Text style={MyStyles.descriptionInput}>Raça:</Text>
                                <View style={{ padding: 10 }}>
                                    <Picker
                                        selectedValue={props.values.race}
                                        onValueChange={props.handleChange('race')}
                                        itemStyle={{ fontSize: 14, height: 50, width: 130 }}
                                    >
                                        <Picker.Item label="Branca" value="Branca" />
                                        <Picker.Item label="Preta" value="Preta" />
                                        <Picker.Item label="Amarela" value="Amarela" />
                                        <Picker.Item label="Parda" value="Parda" />
                                        <Picker.Item label="Indígena" value="Indígena" />
                                    </Picker>
                                </View>
                                <Text style={MyStyles.descriptionInput}>O cadastro é para jornalista, revista ou editora:</Text>
                                <View style={{ padding: 10 }}>
                                    <Picker
                                        selectedValue={props.values.journalist}
                                        onValueChange={props.handleChange('journalist')}
                                        itemStyle={{ fontSize: RFValue(16, 844), height: 50, width: 130 }}
                                    >
                                        <Picker.Item label="Não" value="Não" />
                                        <Picker.Item label="Sim" value="Sim" />
                                    </Picker>
                                </View>
                                <View style={{ width: 150, alignSelf: 'center', borderRadius: 20 }}>
                                    <CustomButton text="Registrar-se" onPress={props.handleSubmit} />
                                </View>
                            </View >
                        </TouchableWithoutFeedback>)
                    }
                </Formik >

                <Text style={MyStyles.textTermosUso}>Ao registrar-se, você confirma que aceita os nossos <Text style={MyStyles.link}>Termos de Uso</Text> e a nossa <Text style={MyStyles.link}>Política de Privacidade</Text>.</Text>

                <CustomButton text="Já tem uma conta? Clique aqui" onPress={onSignInPressed} type="TERTIARY" />
            </View >
        </ScrollView >
    );
};


