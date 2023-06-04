import React, { useContext, useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native'
import { Text, View, TextInput, TouchableHighlight, Image, KeyboardAvoidingView, Alert, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import routes from '../../routes';
import { AppointmentContext } from '../../../context/appoiment';
import DogtorView from '../../components/DogtorView';
import AppointmentHeader from './Header';
import ProcessUserLocation from "../../utils/location"

export default function FirstStep() {
    const [selected, setSelected] = useState(false);
    const { register, setValue, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigation().navigate

    const { appointment } = useContext(AppointmentContext)
    const { type } = appointment
    const [selectedValue, setSelectedValue] = useState(type);

    function goNext() {
        navigate(routes.FLUXO_AGENDAMENTO_2)
    }

    return (
        <DogtorView container_style={styles.container} goNext={goNext} absolute_navigators={true}>
            <ProcessUserLocation />
            <AppointmentHeader step={1} />

            <Text style={styles.infoDog}>
                Escolha o tipo de atendimento
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
                    // onBlur={register("text", selected ? { required: true } : { required: false })}
                    />
                </View>
            </View>
        </DogtorView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
    },
    navBar: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    infoDog: {
        textAlign: 'center',
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
        borderRadius: 10,
        overflow: 'hidden',
        width: '100%',
        marginBottom: 10,
        marginTop: 20,
    },
    picker: {
        borderColor: '#ACBBC3',
        height: 56,
        color: '#ACBBC3',
        fontSize: 16,
    },
    input: {
        borderWidth: 1,
        height: 200,
        width: 392,
        paddingBottom: 150,
        padding: 10,
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