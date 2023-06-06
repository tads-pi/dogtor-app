import React, { useContext, useEffect } from 'react';
import { APPOINTMENT_TYPES } from '../../../constants/appointment';
import { AppointmentContext } from '../../../context/appoiment';
import { Keyboard, StyleSheet, Text, TextInput, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { useNavigation } from '@react-navigation/native';

import * as colors from "../../constants/colors";
import routes from '../../routes';
import AppointmentHeader from './Header';
import DogtorView from '../../components/DogtorView';

export default function FirstStep() {
    const navigate = useNavigation().navigate

    const { getUserLocation, setMapPivot, getMapPivot, appointment, setType, setDescription } = useContext(AppointmentContext)
    const { description, type } = appointment

    function goNext() {
        navigate(routes.FLUXO_AGENDAMENTO_2)
    }

    useEffect(() => {
        let retries = 5;

        const { lat, long } = getMapPivot()
        while (retries >= 0 && (lat === 0 || long === 0)) {
            getUserLocation().then(({ latitude, longitude }) => {
                setMapPivot(latitude, longitude)
            })

            retries--;
        }
    })

    const shouldDisableNext = description === "" || type === ""
    return (
        <DogtorView container_style={styles.container} goNext={goNext} absolute_navigators={true} disableGoNext={shouldDisableNext}>
            <AppointmentHeader step={1} />

            <View style={styles.header}>
                <Text style={styles.headerTitle}>
                    Escolha o tipo de atendimento
                </Text>
            </View>

            <View style={styles.body}>
                <View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder='Descreva brevemente o seu problema'
                            placeholderTextColor={colors.DOGTOR_GRAY}
                            name="text"
                            style={styles.input}

                            multiline={true}

                            defaultValue={description}

                            onKeyPress={(e) => {
                                if (e.nativeEvent.key === "Enter") {
                                    Keyboard.dismiss()
                                }
                            }}

                            onChangeText={(text) => setDescription(text)}
                        />
                    </View>

                    <View style={styles.pickerContainer}>
                        <SelectList
                            data={APPOINTMENT_TYPES}
                            save="value"
                            placeholder="Selecione o tipo de atendimento"
                            searchPlaceholder='Pesquisar...'

                            defaultOption={type !== "" ? {
                                key: type,
                                value: type,
                            } : ""}

                            style={styles.picker}
                            boxStyles={styles.pickerBoxStyles}
                            dropdownStyles={styles.pickerDropdownStyle}
                            searchicon={<></>}

                            setSelected={(value) => {
                                setType(value)
                            }}
                        />

                    </View>
                </View>
            </View>
        </DogtorView>
    );
};

const input = {
    flex: 1,
    fontSize: 16,

    borderWidth: 1,
    borderRadius: 12,

    padding: 16,

    backgroundColor: colors.DOGTOR_WHITE,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 16,
    },
    header: {
        marginTop: 32,
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    body: {
        flex: 1,
        margin: 16,
    },
    pickerContainer: {
        width: '100%',
        marginTop: 32,
    },
    inputWrapper: {
        minHeight: "35%",
    },
    input: {
        ...input,
        borderColor: colors.DOGTOR_GRAY,
    },
    picker: {
        flex: 1,
    },
    pickerBoxStyles: {
        borderColor: colors.DOGTOR_GRAY,
        backgroundColor: colors.DOGTOR_WHITE,
    },
    pickerDropdownStyle: {
        borderColor: colors.DOGTOR_GRAY,
        backgroundColor: colors.DOGTOR_WHITE
    },
})