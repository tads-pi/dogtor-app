import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native/"

const PROGRESS_BAR_COLOR = "#41C4E5"
const TOTAL_STEPS = 6

export default function AppointmentHeader(props) {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        setProgress((props.step * 100) / TOTAL_STEPS)
    }, [props.step])

    return (
        <View style={styles.main}>
            <View style={[styles.progressBar, { width: `${progress}%` }]} />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        maxHeight: 15,

        borderBottomColor: "darkgrey",
        borderBottomWidth: 1,

        backgroundColor: "white",
    },

    progressBar: {
        height: "100%",
        backgroundColor: PROGRESS_BAR_COLOR,
    }
})