import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import * as colors from "../constants/colors"

export default function GoNext(props) {
    const { disabled, onPress, title } = props

    return (
        <View style={styles.buttonWrapper}>
            <TouchableHighlight onPress={onPress} disabled={disabled}>
                <Text style={
                    [styles.button, {
                        backgroundColor: disabled ? colors.DOGTOR_GRAY : colors.DOGTOR_BLUE
                    }]
                }>{title || "Confirmar"}</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonWrapper: {
        margin: 12,

        borderRadius: 16,
        overflow: "hidden",

        // borderColor: "red",
        // borderWidth: 1,
    },
    button: {
        padding: 12,

        color: "white",
        textAlign: "center",
        fontSize: 16,
    },
})