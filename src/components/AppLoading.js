import React from "react"
import { ActivityIndicator, StyleSheet, Text, View } from "react-native"
import * as colors from "../constants/colors"

export default function AppLoading(props) {
    const { inner_style } = props
    // todo make it look better
    return (
        <View style={[inner_style, styles.container]}>
            <Text>Carregando</Text>
            <ActivityIndicator />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DOGTOR_WHITE,
        justifyContent: "center",
        alignItems: "center"
    }
})