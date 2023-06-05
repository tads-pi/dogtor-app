import React from "react"
import { View, Image, StyleSheet, Text, Platform } from "react-native"

export default function ImageHandler(props) {
    const { container_style, file } = props

    const route = `https://s3.sa-east-1.amazonaws.com/kauacalixtolab.xyz/dogtor_images/${file}.png`

    return (
        <View style={container_style ? container_style : styles.default_container}>
            {Platform.OS === "android"
                ? <Text>
                    <Image
                        style={{
                            width: 300,
                            height: 125,
                        }}
                        source={{
                            uri: route
                        }}
                    />
                </Text>
                : <Image
                    source={{
                        uri: route
                    }}
                    style={styles.imageIOS}
                />}
        </View>
    )
}

const styles = StyleSheet.create({
    default_container: {
    },
    default_image: {
        width: 100,
        height: 100,
        // width: "100%",
    },
    imageIOS: {
        width: 300,
        height: 125,
        zIndex: 100,
    },
})