import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card } from "react-native-paper";
import SchedulingPet from "../components/SchedulingPet"
import DogtorView from "../components/DogtorView";
import { AppointmentContext } from "../../context/appoiment";

export default function DetalhesPet() {
  const { appointment } = useContext(AppointmentContext)
  const { pet_view } = appointment
  const { name, banner_picture } = pet_view

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