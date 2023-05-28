import React, { useContext } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import styles from "./style"
import { useNavigation } from "@react-navigation/native";
import routes from "../../../routes";
import DogtorView from "../../../components/DogtorView";
import AppointmentHeader from "../Header";
import { PAYMENT_TYPE_PAID } from "../../../../constants/appointment";
import { AppointmentContext } from "../../../../context/appoiment";

export default function SixthStep() {
  const { setPaymentStatus } = useContext(AppointmentContext)
  const navigate = useNavigation().navigate

  function goNext() {
    navigate(routes.FLUXO_AGENDAMENTO_7)
    setPaymentStatus(PAYMENT_TYPE_PAID)
  }

  return (
    <DogtorView>
      <AppointmentHeader step={6} />

      <View style={styles.navBar}>
        <TouchableOpacity><Image source={require('../../../assets/images/back.png')} /></TouchableOpacity>
        <TouchableOpacity><Image source={require('../../../assets/images/cancel.png')} /></TouchableOpacity>
      </View>

      <View style={styles.boxTitle}>
        <Text style={styles.textTitle}>Código PIX para pagamento</Text>
      </View>

      <View style={styles.boxTitle1}>
        <Text style={styles.textTitle1}>O código dura até 24h, então não se preocupe se não puder concluir o pagamento agora, ou se precisar fechar o aplicativo!</Text>
      </View>

      <View style={styles.qrcode}>
        <Image source={require('../../../assets/images/qrcode.png')} />
      </View>

      <View style={styles.boxTitle2}>

        <Text style={styles.textTitle2}>Clique na caixa de texto para copiar</Text>
        <TouchableOpacity
          style={styles.buttonCopy}

        >
          <Text style={styles.textButtonCopy}>00020126580014BR.GOV.BCB.PIX01365dd05ecc-d5da-46e1-9446-a700fc48ce7a5204000053039865802BR5919Kaua Chaves Calixto6009SAO PAULO610805409000622405208F76N4zCUNgieUm63xdv6304986E</Text>
          <Image source={require('../../../assets/images/copy.png')} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.buttonConfirm}
        onPress={goNext}
      >
        <Text style={styles.textButtonConfirm}>Confirmar</Text>
      </TouchableOpacity>
    </DogtorView>
  );
}