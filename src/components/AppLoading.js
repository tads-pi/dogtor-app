import React from "react"
import { ActivityIndicator, StyleSheet, Text, View } from "react-native"

export default function AppLoading(props) {
    const { inner_style } = props
    // todo make it look better
    return (
        <View style={[inner_style, styles.container]}>
            <ActivityIndicator />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})