import { StyleSheet, Text, View } from "react-native"
import * as colors from "../constants/colors"

export default function AppLoading() {
    // todo make it look better
    return (
        <View style={styles.container}>
            <Text>Loading...</Text>
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