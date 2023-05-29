import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import styles from "./style"
import { useNavigation } from "@react-navigation/native";
import routes from "../../../routes";
import DogtorView from "../../../components/DogtorView";
import AppointmentHeader from "../Header";

export default function SeventhStep() {
  const navigate = useNavigation().navigate

  function goNext() {
    navigate(routes.TELA_MENU)
  }

  return (
    <DogtorView>
      <AppointmentHeader step={7} />
      <View style={styles.boxTitle}>
        <Text style={styles.textTitle}>Agendamento enviado com sucesso!</Text>
      </View>

      <View>
        <Image style={styles.image} source={require('../../../assets/images/confirmation_dog.png')} />
      </View>

      <View style={styles.boxTitle1}>
        <Text style={styles.textTitle1}>Seu pedido de agendamento foi enviado com sucesso para a clínica.</Text>
      </View>

      <TouchableOpacity
        style={styles.buttonRetry}
        onPress={goNext}
      >
        <Text style={styles.textButtonRetry}>Voltar ao Início</Text>
      </TouchableOpacity>
    </DogtorView>
  );
}