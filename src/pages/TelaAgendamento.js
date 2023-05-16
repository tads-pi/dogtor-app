import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native'
import { Text, View, TextInput, TouchableHighlight, Image, KeyboardAvoidingView, Alert, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import routes from '../routes';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function TelaAgendamento() {
    const [selectedValue, setSelectedValue] = useState("java");
    const [selected, setSelected] = useState(false);
    const { register, setValue, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigation().navigate
    
    function btnConfirmar() {
        // WorkingProgress
    }

    return (

        <View style={styles.container}>



            <View style={styles.navBar}>
                <TouchableOpacity onPress={() => {navigate(routes.TELA_MENU)}}><Image source={require('../assets/images/voltar.png')} /></TouchableOpacity>
                <TouchableOpacity onPress={() => {navigate(routes.TELA_MENU)}}><Image source={require('../assets/images/cancel.png')} /></TouchableOpacity>
            </View>



            <Text style={styles.infoDog}>
                Qual a área de atendimento
            </Text>
            <View style={styles.body} >
                <View>
                    <View style={styles.pickerContainer}>
                        <Picker

                            style={styles.picker}
                            selectedValue={selectedValue}
                            dropdownIconColor={"white"}
                            name="select"
                            onValueChange={(itemValue, itemIndex) => {
                                setSelectedValue(itemValue)
                                setValue("select", itemValue)
                                if (itemValue === "Cirurgia" || itemValue === "Vacina") {
                                    setSelected(true)
                                } else {
                                    setSelected(false)
                                }
                            }}
                        >
                            <Picker.Item label="Banho" value="Banho" />
                            <Picker.Item label="Cirurgia" value="Cirurgia" />
                            <Picker.Item label="Dentista" value="Dentista" />
                            <Picker.Item label="Vacina" value="Vacina" />
                        </Picker>

                    </View>
                    <TextInput
                        name="text"
                        style={errors.text ? styles.inputErrors : styles.input}
                        placeholder='Descreva brevemente o seu problema'
                        placeholderTextColor="#ACBBC3"
                        onChangeText={(text) => setValue("text", text)}
                        onBlur={register("text", selected ? { required: true } : { required: false })}
                    />

                </View>
                <TouchableHighlight style={styles.button} onPress={handleSubmit(btnConfirmar)}>
                    <View style={styles.button}>
                        <Text style={{ color: 'white' }}>Confirmar</Text>
                    </View>
                </TouchableHighlight>
            </View>

        </View >



    );

};

const styles = StyleSheet.create({

    container: {

        backgroundColor: 'white',
        paddingTop: 24,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 30,
        width: screenWidth,
        height: screenHeight,
        alignItems: 'center',

    },

    navBar: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    infoDog: {
        color: '#282C26',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 15,
    },
    body: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

    },

    pickerContainer: {
        borderWidth: 1,
        borderColor: '#ACBBC3',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        width: '100%',
        marginBottom: 10,
        marginTop: 20,

    },
    picker: {
        borderColor: '#ACBBC3',
        height: 56,
        backgroundColor: 'white',
        color: '#ACBBC3',
        fontSize: 16,


    },

    input: {
        borderWidth: 1,
        height: 200,
        width: 392,
        paddingBottom: 150,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#ACBBC3',
        color: '#ACBBC3',
        fontSize: 16,

    },
    inputErrors: {
        borderWidth: 1,
        height: 200,
        width: 392,
        paddingBottom: 150,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: 'red',
        color: '#ACBBC3',
        fontSize: 16,

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#41C4E5',
        width: 388,
        padding: 10,
        borderRadius: 16,
        height: 51,
        fontSize: '16px',



    },

    confirmar: {

        alignSelf: 'center',
        borderColor: 'black',
        fontSize: 16,
        color: 'white',
        width: 100


    },


})