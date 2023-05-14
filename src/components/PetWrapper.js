import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import moment from "moment"

const PetWrapper = (props) => {
    const birthYear = moment(props.pet.ano_de_nascimento, "YYYY")
    const age = moment().diff(birthYear, "years")

    return (
        <View style={[styles.container, styles.image]}>
            <ImageBackground source={props.pet.profile_picture()} imageStyle={styles.image}>
                <View style={styles.header}>
                    <View style={styles.headerHero}>
                        <Text style={[styles.text, styles.title]}>{props.pet.name}</Text>
                        <Text style={[styles.text, styles.subtitle]}> {props.pet.race}</Text>
                    </View>
                    <Text style={[styles.text, styles.age]}>{age} anos</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default PetWrapper

const styles = StyleSheet.create({
    container: {
        marginRight: 16,
    },
    image: {
        borderRadius: 32,
        height: 250,
        width: 200,
    },
    header: {
        marginTop: 32,
        marginLeft: 16,
    },
    text: {
        color: "white",
    },
    title: {
        fontSize: 16,
        fontWeight: "800",
    },
    subtitle: {
        fontSize: 12,
        opacity: 0.5,
    },
    age: {
        fontSize: 12,

        maxWidth: "35%",
        textAlign: "center",

        borderColor: "white",
        borderWidth: 1.5,
        borderRadius: 10,

        marginTop: 5,

        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
        paddingBottom: 2,
    },

    headerHero: {
        flexDirection: "row",
        alignItems: "center",
    }
})