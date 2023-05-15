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
import { AppointmentContext } from "../../context/appoiment";
import { PAYMENT_TYPE_PENDING } from "../../constants/appointment";

export default function TelaConfirmacaoDados() {
  const { setPaymentStatus } = useContext(AppointmentContext)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.menuSuperior}></View>
        <View style={styles.navBar}>
          <TouchableOpacity>
            <Image source={require("../assets/images/back.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../assets/images/cancel.png")} />
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
            <Text>Rua</Text>
            <Text>Complemento</Text>
            <Text>CEP</Text>
            <Text>País</Text>
            <Text>Telefone</Text>
          </View>
        </View>
        <View style={styles.container2}>
          <View
            style={styles.consultaStyle}
          >
            <Text style={styles.consultaTextStyle}>Consulta</Text>
          </View>
          <View style={styles.consultaConfirmation}>
            <Text>Data</Text>
            <Text>Sobre consulta: </Text>
            <Text>Pet:</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btnProcurarAtendimento} onPress={() => setPaymentStatus(PAYMENT_TYPE_PENDING)}>
          <Text style={styles.btnProcurarAtendimentoText}>
            Continuar para pagamento
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  menuSuperior: {
    backgroundColor: "#41C4E5",
    width: 390,
    height: 14,
  },
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
