import React, { useContext } from "react";
import { AppointmentContext } from "../../context/appoiment";
import { Card } from "react-native-paper";
import DogtorView from "../components/DogtorView";
import Image from "react-native";
import { StyleSheet, Text, View } from "react-native";
import SchedulingPet from "../components/SchedulingPet";

export default function DetalhesPet() {
  const { appointment } = useContext(AppointmentContext)
  const { pet_view } = appointment
  const { name, breed, race, banner_picture } = pet_view

  return (
    <DogtorView container_style={styles.container} hide_go_next={true}>
      <View style={styles.banner}>
        <Image source={banner_picture()} style={styles.image} />
      </View>
      <View>
        <Card style={styles.card}>
          <Text style={styles.paragraph}>
            {name}
          </Text>
          <Text style={styles.lowerParagraph}>
            {`${breed} ${race}`}
          </Text>
          <SchedulingPet pet={pet_view} />
        </Card>
      </View>
    </DogtorView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  lowerParagraph: {
    fontSize: 12,
    textAlign: "center",
  },
  card: {
    borderRadius: 32,
    padding: 5,
    justifyContent: "start",
    margin: -16,
  },
  banner: {},
  image: {
    resizeMode: "cover",
    width: "100%",
  }
});