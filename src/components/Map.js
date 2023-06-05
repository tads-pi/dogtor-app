import React from "react"
import { Image, StyleSheet, Text, View } from "react-native";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as colors from "../constants/colors";
import { mapStyle } from "../constants/fluxoAgendamento";

const USER_PIN_TITLE = "Você está aqui"

export default function Map(props) {
    const { markers, pivot, callback } = props

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                customMapStyle={mapStyle}

                onPress={() => callback({}, "map")}

                region={pivot ? {
                    // TODO make it animatable, so the screen zoom in when a clinic is selected
                    latitude: pivot.lat,
                    longitude: pivot.long,
                    latitudeDelta: 0.0125,
                    longitudeDelta: 0.0125,
                } : null}
            >
                {/*//? Set a Marker for current user locations, which is the same as MapView, considering our business rules */}
                {pivot && (
                    <Marker
                        title={USER_PIN_TITLE}
                        coordinate={{
                            latitude: pivot.lat,
                            longitude: pivot.long,
                        }}

                        image={require("../assets/images/user_pin.png")}
                    >
                        <Callout
                            tooltip
                            style={styles.userCallout}
                        >
                            <View style={styles.userCalloutView}>
                                <Text>{USER_PIN_TITLE}</Text>
                            </View>
                        </Callout>
                    </Marker>
                )}

                {/*//? Loads Given Markers from parent Component */}
                {markers}

            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
    },
    map: {
        flex: 1,
    },
    userPin: {
        width: 75,
        height: 75,
        alignItems: "center",
        justifyContent: "center",
    },
    userPinImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    userCallout: {
        borderRadius: 15,
    },
    userCalloutView: {
        padding: 10,
        backgroundColor: colors.DOGTOR_WHITE,
    }
});
