import React from 'react';
import AppLoading from './AppLoading';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export default function DogtorTitle(props) {
    let [fontsLoaded] = useFonts({
        'Barlow-Light': require("../assets/fonts/Barlow-Light.ttf"),
    });

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <View style={styles.container}>
            {
                props.kind == "footer"
                    ? <Text style={styles.footerKind}>@dogtor</Text>
                    : <Text style={styles.dogtorText}>DOGTOR</Text>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    dogtorText: {
        fontFamily: 'Barlow-Light',
        fontStyle: 'normal',
        fontSize: 36,
        color: '#41C4E5',
        margin: 8,
    },
    footerKind: {
        fontFamily: 'Barlow-Light',
        fontSize: 12,
        color: 'lightgray',
        fontStyle: 'italic',
        opacity: 0.5,
    }
})