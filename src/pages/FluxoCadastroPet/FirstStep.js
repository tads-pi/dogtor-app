import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/auth';
import { MaskedTextInput } from "react-native-mask-text";
import { SelectList } from 'react-native-dropdown-select-list';
import DogtorView from '../../components/DogtorView';
import { breeds } from './animals';
import * as colors from "../../constants/colors";
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import routes from '../../routes';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { notEmpty } from '../../utils/validators';

export default function PetFirst() {
    const { inRegisterPet, addPetInfo } = useContext(AuthContext)
    const { name, birth_year, size, weight, breed } = inRegisterPet
    const navigate = useNavigation().navigate

    const goNext = () => {
        navigate(routes.FLUXO_CADASTRO_PET_2)
    };

    const handleEspecieChange = (especie) => {
        addPetInfo({
            breed: especie,
        })
    };

    const [ageOrBirthDate, setAgeOrBirthDate] = useState("")
    const handleAge = (age) => {
        let parsedAge = ""
        if (age.length > 3) {
            parsedAge = moment(age, "DD/MM/YYYY").format("DD-MM-YYYY")
        }
        else {
            parsedAge = moment().year() - Number(age)
        }

        setAgeOrBirthDate(parsedAge)
        addPetInfo({
            birth_year: parsedAge,
        })
    }

    const shouldDisableGoNext = !notEmpty([name, size, weight, breed, birth_year])
    return (
        <DogtorView goNext={goNext} disableGoNext={shouldDisableGoNext}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Informações do Pet</Text>
            </View>

            <View style={styles.body}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do pet"
                    placeholderTextColor={colors.DOGTOR_GRAY}
                    keyboardType="name-phone-pad"

                    onChangeText={(rawValue) => {
                        addPetInfo({
                            name: rawValue,
                        })
                    }}
                />

                <View style={styles.input}>
                    <MaskedTextInput
                        placeholder="Idade ou Data de nascimento"

                        mask={ageOrBirthDate.length > 3 ? "99/99/9999" : "9999"}
                        keyboardType="numeric"

                        onChangeText={handleAge}
                    />
                </View>

                <View style={styles.commentWrapper}>
                    <Text style={styles.commentStyle}>exemplo: 31/12/2023</Text>
                </View>

                <View style={styles.wrapper}>
                    <TextInput
                        placeholder="Peso (kg)"
                        placeholderTextColor={colors.DOGTOR_GRAY}
                        maxLength={6}

                        style={styles.inputInWrapper}
                        keyboardType="numeric"
                        onChangeText={(rawValue) => {
                            addPetInfo({
                                weight: rawValue,
                            })
                        }}
                    />
                    <TextInput
                        placeholder="Altura (cm)"
                        placeholderTextColor={colors.DOGTOR_GRAY}
                        maxLength={6}

                        style={styles.inputInWrapper}
                        keyboardType="numeric"
                        returnKeyType='done'
                        onChangeText={(rawValue) => {
                            addPetInfo({
                                size: rawValue,
                            })
                        }}
                    />
                </View>

                <View style={styles.pickerContainer}>
                    <View style={styles.pickerWrapper}>
                        <SelectList
                            style={styles.picker}
                            boxStyles={styles.pickerBoxStyles}
                            dropdownStyles={styles.pickerDropdownStyle}
                            data={breeds}
                            save="value"
                            placeholder="Escolher a Espécie"
                            searchPlaceholder='Pesquisar...'

                            setSelected={(val) => handleEspecieChange(val)}
                        />
                    </View>
                </View>
            </View>
        </DogtorView>
    );
}

const input = {
    fontSize: 16,

    padding: 16,
    margin: 12,

    borderRadius: 12,
    borderWidth: 1,

    backgroundColor: colors.DOGTOR_WHITE,
    borderColor: colors.DOGTOR_GRAY,
}

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        // marginTop: 48,
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    wrapper: {
        flexDirection: "row",
    },
    body: {
        flex: 1,
        flexDirection: 'column',
    },
    input: {
        ...input,
    },
    inputInWrapper: {
        flex: 1,
        ...input,
    },
    pickerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
    },
    pickerWrapper: {
        width: "100%",
        fontSize: 16,
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
    commentWrapper: {
        marginLeft: 16,
    },
    commentStyle: {
        fontSize: 10,
        fontStyle: 'italic',
        fontWeight: 'bold',

        color: colors.DOGTOR_GRAY,
    }
});
