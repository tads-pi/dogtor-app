import * as React from "react";
import { Card } from "react-native-paper";
import DogtorView from "../components/DogtorView";
import { Text, View, StyleSheet, Image } from "react-native";

export default function Notifications() {
  return (
    <DogtorView container_style={styles.container} hide_go_next={true}>
      <View style={styles.header}>
        <Text style={styles.paragraph}>
          Agendamentos deste mês
        </Text>
        <Card style={styles.cardSchedulling}>
          <Text style={styles.schedulingParagraph}>
            Dentista
          </Text>
          <Text style={styles.schedulingPSubParagraph}>
            Veterinário dos pets
          </Text>
          <View style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
            <Card style={styles.cardDateTime}>
              <Text style={styles.textCardDateTime}>
                31 de Dezembro
              </Text>
            </Card>

            <Card style={styles.cardDateTime}>
              <Text style={styles.textCardDateTime}>
                12:00
              </Text>
            </Card>
          </View>
        </Card>

        <Card style={styles.cardSchedulling}>
          <Text style={styles.schedulingParagraph}>
            Dentista
          </Text>
          <Text style={styles.schedulingPSubParagraph}>
            Veterinário dos pets
          </Text>
          <View style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
            <Card style={styles.cardDateTime}>
              <Text style={styles.textCardDateTime}>
                12 de Janeiro
              </Text>
            </Card>
            <Card style={styles.cardDateTime}>
              <Text style={styles.textCardDateTime}>
                14:00
              </Text>
            </Card>
          </View>
        </Card>
      </View>
      <View style={styles.body}>
        <Text style={styles.subparagraph}>
          Agendamentos futuros
        </Text>
      </View>
      <View style={styles.footer}>
        <View style={{ alignItems: "center", justifyContent: "end" }}>
          <Image style={{ marginTop: 16 }} source={require("../assets/images/notifications_dog.png")} />
          <Text style={{ color: "#ACBBC3", marginTop: 16 }}>Parece que está tudo bem por aqui!</Text>
          <Text>❤️</Text>
        </View>
      </View>
    </DogtorView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 32,
    justifyContent: "space-between",
    flex: 1,
  },
  header: {
    width: "100%",
  },
  body: {
    flex: 1,
  },
  footer: {
  },
  paragraph: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  schedulingParagraph: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "left",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  schedulingPSubParagraph: {
    fontSize: 12,
    textAlign: "left",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    color: "gray"
  },
  cardDateTime: {
    marginTop: 6,
    backgroundColor: "#41C4E5",
    paddingLeft: 12,
    paddingRight: 12,
  },
  textCardDateTime: {
    fontSize: 12,
    textAlign: "left",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    color: "white",
  },
  cardSchedulling: {
    border: "solid 1px #41C4E5",
    borderRadius: 10,
    width: "100%",
    padding: 10,
    marginTop: 15,
  },
  subparagraph: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25
  },
});
