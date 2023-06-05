import { Marker, Callout } from "react-native-maps"
import { StyleSheet, Image, Text, View } from "react-native"
import { getRandomNumber } from "../../../../utils/numbers"
import DogtorMapCallout from "../components/DogtorMapCallout"
import * as colors from "../../../../constants/colors"

export function buildMarkers(userLatitude, userLongitude, availableClinics, callback) {
    function salt(location) {
        return location + getRandomNumber(-0.005, 0.005)
    }

    const markers = []
    for (let i = 0; i < availableClinics.length; i++) {
        const { name, street, number, image } = availableClinics[i]
        markers.push(
            <Marker
                key={i}
                coordinate={{
                    latitude: salt(userLatitude),
                    longitude: salt(userLongitude),
                }}

                image={require("../../../../assets/images/pin.png")}

                onPress={() => {
                    callback(availableClinics[i])
                }}
            >
                <Callout
                    tooltip
                    style={styles.callout}
                >
                    <DogtorMapCallout name={name} street={street} number={number} image={image} />
                </Callout>
            </Marker>
        )
    }

    return markers;
}

const styles = StyleSheet.create({
    marker: {

    },
    callout: {
        borderRadius: 15,
        backgroundColor: colors.DOGTOR_WHITE,
        overflow: "hidden",
    },
})