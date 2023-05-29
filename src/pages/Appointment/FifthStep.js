import React, { useContext } from "react";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { AppointmentContext } from "../../../context/appoiment";
import { PAYMENT_TYPE_PENDING } from "../../../constants/appointment";
import AppointmentHeader from "./Header";
import { useNavigation } from "@react-navigation/native";
import routes from "../../routes";

export default function FifthStep() {
    const { appointment, setPaymentStatus } = useContext(AppointmentContext)
    const { clinic, date, time, type, pet } = appointment
    const { name, street, number, phone, zip_code } = clinic

    const navigate = useNavigation().navigate

    function goNext() {
        setPaymentStatus(PAYMENT_TYPE_PENDING)
        navigate(routes.FLUXO_AGENDAMENTO_6)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <AppointmentHeader step={5} />
                <View style={styles.navBar}>
                    <TouchableOpacity onPress={() => navigate(routes.FLUXO_AGENDAMENTO_2)}>
                        <Image source={require("../../assets/images/back.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate(routes.TELA_MENU)}>
                        <Image source={require("../../assets/images/cancel.png")} />
                    </TouchableOpacity>
                </View>
                <View style={styles.dogNoExiste}>
                    <Text style={[styles.subtitle, { marginTop: 20 }]}>
                        Confirmação de dados
                    </Text>
                    <Text style={styles.descriptionColor}>
                        Confirme todas as informações e escolha a forma de pagamento
                    </Text>
                </View>

                <View style={styles.container}>
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
                <View style={styles.container2}>
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
                <TouchableOpacity style={styles.btnProcurarAtendimento} onPress={goNext}>
                    <Text style={styles.btnProcurarAtendimentoText}>
                        Continuar para pagamento
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 328,
        height: 150,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#ACB5CA",
        margin: 32,
    },
    container2: {
        flex: 1,
        width: 328,
        height: 110,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#ACB5CA",
        margin: 32,
        marginTop: -10,
        marginBottom: 130,
    },
    enderecoStyle: {
        borderBottomWidth: 1,
        borderColor: "#ACB5CA",
        width: 328,
        padding: 10,
    },
    consultaStyle: {
        borderBottomWidth: 1,
        borderColor: "#ACB5CA",
        width: 328,
        padding: 10,
    },
    consultaTextStyle: {
        fontWeight: "bold",
        fontSize: 14
    },
    navBar: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
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
        marginLeft: 17,
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
        flex: 1,
        alignItems: "center",

        margin: 40,
    },
    btnProcurarAtendimento: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        alignSelf: "center",
        width: 328,
        height: 66,
        marginBottom: 16,
        borderRadius: 11,
        backgroundColor: "#41C4E5",
    },
    btnProcurarAtendimentoText: {
        color: "#FFFFFF",
    },
});
