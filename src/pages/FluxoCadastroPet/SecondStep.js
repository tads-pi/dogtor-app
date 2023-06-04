import React, { useContext, useState } from "react"
import routes from "../../routes"
import DogtorView from "../../components/DogtorView"
import { ScrollView, StyleSheet, View, Text } from "react-native"
import { races as r } from "./animals"
import { AuthContext } from "../../../context/auth"
import * as colors from "../../constants/colors"
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import { useNavigation } from "@react-navigation/native"

export default function PetSecondStep() {
    const navigate = useNavigation().navigate
    const { inRegisterPet, addPetInfo } = useContext(AuthContext)
    const { breed } = inRegisterPet

    const races = r[breed]

    function goNext() {
        navigate(routes.FLUXO_CADASTRO_PET_3)
    }

    function handleRaceChange(value) {
        addPetInfo({
            race: value,
        })
    }

    const [checked, setChecked] = useState();
    return (
        <DogtorView goNext={goNext}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Qual a raça de seu pet?</Text>
            </View>
            <ScrollView>
                <View style={styles.scrollContainer}>
                    <View style={styles.wrapper}>
                        <RadioButtonGroup
                            containerStyle={{ marginBottom: 10 }}
                            selected={checked}

                            onSelected={(value) => {
                                setChecked(value)
                                handleRaceChange(value)
                            }}

                            radioBackground={colors.DOGTOR_BLUE}
                        >
                            {
                                races.map(({ key, value }) => {
                                    return (

                                        <RadioButtonItem
                                            key={key}
                                            value={value}
                                            label={value}

                                            style={styles.radioButtonItem}
                                        />
                                    )
                                })
                            }
                        </RadioButtonGroup>
                    </View>
                </View>
            </ScrollView>
        </DogtorView >
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 12,
    },
    wrapper: {
        height: "100%",
        width: "100%",
        fontSize: 16,
    },
    radioButtonItem: {
        borderColor: colors.DOGTOR_GRAY,
        borderWidth: 1,

        margin: 16,
    },
    header: {
        width: "100%",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    }
})
