import React from "react";
import ImageHandler from "../../../../components/ImageHandler";
import { Image, Text, View, StyleSheet, Platform } from "react-native";

import * as colors from "../../../../constants/colors";

export default function DogtorMapCallout(props) {
    const name = props.name;
    const address = `${props.street}, ${props.number}`;

    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <ImageHandler
                    file={props.image}
                />
            </View>
            <View style={styles.information}>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.address}>
                    {
                        Platform.OS === "android"
                            ? <Text style={{
                                color: colors.DOGTOR_BLUE,
                                paddingRight: 5,
                            }}>o</Text>
                            : <Image style={styles.icon} source={require("../../../../assets/images/empty_pin.png")} />
                    }

                    <Text style={styles.subTitle}>{address}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
    },
    information: {
        flexDirection: "column",
        padding: 8,
    },
    address: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 10,
    },
    imageWrapper: {
        width: 300,
        height: 125,
    },
    image: {
        width: 300,
        height: 125,
    },
    icon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        color: "black"
    },
    subTitle: {
        fontSize: 14,
        color: "#ACBBC3"
    }
})
