import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card } from "react-native-paper";
import SchedulingPet from "../components/SchedulingPet"
import DogtorView from "../components/DogtorView";
import { AppointmentContext } from "../../context/appoiment";

export default function DetalhesPet() {
  const { appointment } = useContext(AppointmentContext)
  const { pet } = appointment
  const { name, banner_picture } = pet

  return (
    <DogtorView container_style={styles.container}>
      <View style={styles.banner}>
        <Image source={banner_picture()} style={styles.image} />
      </View>
      <View>
        <Card style={styles.card}>
          <Text style={styles.paragraph}>
            {name}
          </Text>
          <SchedulingPet />
        </Card>
      </View>
    </DogtorView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    backgroundColor: "blue",
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    borderRadius: 32,
    padding: 5,
    justifyContent: "start",
    margin: -16,
  },
  banner: {
    // height: 200,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
  }
});