import React, { useContext } from "react";
import { AppointmentContext } from "../../../context/appoiment";
import AppointmentHeader from "./Header";
import { PAYMENT_TYPE_PENDING } from "../../../constants/appointment";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import DogtorView from "../../components/DogtorView";
import * as colors from "../../constants/colors";
import routes from "../../routes";
import { useNavigation } from "@react-navigation/native";

export default function FifthStep() {
    const { appointment, setPaymentStatus } = useContext(AppointmentContext)
    const { clinic, date, type, pet } = appointment
    const { name, street, number, phone, zip_code } = clinic

    const navigate = useNavigation().navigate

    function goNext() {
        setPaymentStatus(PAYMENT_TYPE_PENDING)
        navigate(routes.FLUXO_AGENDAMENTO_6)
    }

    return (
        <DogtorView goNext={goNext} absolute_navigators={true}>
            <AppointmentHeader step={4} />

            <ScrollView>
                <View style={styles.header}>
                    <Text style={[styles.subtitle, { marginTop: 20 }]}>
                        Confirmação de dados
                    </Text>
                    <Text style={styles.descriptionColor}>
                        Confirme todas as informações e escolha a forma de pagamento
                    </Text>
                </View>

                <View style={styles.addressBlock}>
                    <View style={styles.enderecoStyle}>
                        <Text style={{ fontWeight: "bold", fontSize: 14 }}>Endereço</Text>
                    </View>
                    <View style={styles.textConfirmation}>
                        <Text>Clínica: {name}</Text>
                        <Text>Rua: {`${street} - ${number}`}</Text>
                        <Text>CEP: {zip_code}</Text>
                        <Text>País: {"Brasil"}</Text>
                        <Text>Telefone: {phone}</Text>
                    </View>
                </View>

                <View style={styles.appointmentBlock}>
                    <View
                        style={styles.consultaStyle}
                    >
                        <Text style={styles.consultaTextStyle}>Consulta</Text>
                    </View>
                    <View style={styles.consultaConfirmation}>
                        <Text>Data: {date}</Text>
                        <Text>Atendimento: {type}</Text>
                        <Text>Pet: {pet.name}</Text>
                    </View>
                </View>
            </ScrollView>
        </DogtorView>
    );
}

const block = {
    borderWidth: 1,
    borderRadius: 8,
    margin: 16,
}

const styles = StyleSheet.create({

    header: {
        flexDirection: "column",
        alignItems: "center",
        margin: 16,
        marginTop: 16,
    },
    addressBlock: {
        ...block,
        borderColor: colors.DOGTOR_GRAY,
    },
    appointmentBlock: {
        ...block,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#ACB5CA",
    },

    enderecoStyle: {
        borderBottomWidth: 1,
        borderColor: "#ACB5CA",
        // width: 328,
        padding: 16,
    },
    consultaStyle: {
        borderBottomWidth: 1,
        borderColor: "#ACB5CA",
        // width: 328,
        padding: 16,
    },
    consultaTextStyle: {
        fontWeight: "bold",
        fontSize: 14
    },
    navBar: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 16,
    },
    descriptionColor: {
        marginTop: 8,
        color: "#ACBBC3",
        textAlign: "center"
    },
    subtitle: {
        color: "#000000",
        fontSize: 16,
        fontWeight: "700",
        // marginLeft: 17,
    },
    textConfirmation: {
        fontWeight: 700,
        fontSize: 14,
        padding: 10,
    },
    consultaConfirmation: {
        fontWeight: 700,
        fontSize: 14,
        padding: 10,
    },
    dogNoExiste: {
        // flex: 1,
        // alignItems: "center",

        // margin: 40,
    },
    btnProcurarAtendimento: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        alignSelf: "center",
        // width: 328,
        // height: 66,
        // marginBottom: 16,
        borderRadius: 12,
        backgroundColor: "#41C4E5",
    },
    btnProcurarAtendimentoText: {
        color: "#FFFFFF",
    },
});
