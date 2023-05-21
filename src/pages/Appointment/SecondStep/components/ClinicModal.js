import React, { useState, useEffect, useRef } from "react"
import {
    Animated,
    View,
    Text,
    Easing
} from "react-native";
import { StyleSheet } from "react-native";
import AppLoading from "../../../../components/AppLoading"
import { getRandomNumber } from "../../../../utils/numbers";

export default function ClinicModal(props) {
    const [clinic, setClinic] = useState({});
    useEffect(() => {
        setClinic(props?.clinic || {})
    }, [props?.clinic])

    const [animations, setAnimations] = useState({})

    const positionAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        // Custom animations
        const showAnimationBezier = Easing.bezier(.01, .63, .43, .99)
        const hideAnimationBezier = Easing.bezier(.48, -0.01, 1, .53)

        const showModalAnimation = Animated.timing(positionAnim, {
            toValue: 1,
            duration: 600,
            easing: showAnimationBezier,
            useNativeDriver: true,
        })

        const hideModalAnimation = Animated.timing(positionAnim, {
            toValue: 0,
            duration: 300,
            easing: hideAnimationBezier,
            useNativeDriver: true,
        })

        setAnimations({
            show: showModalAnimation,
            hide: hideModalAnimation
        })
    }, [positionAnim]);

    const interpolateModalPosition = positionAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [300, 0],
    });

    // Handle modal Animations state
    const animationsAlreadyProcessed = Object.keys(animations).length > 0
    if (animationsAlreadyProcessed) {
        const haveClinic = Object.keys(clinic).length > 0
        haveClinic
            ? animations.show.start()
            : animations.hide.start()
    }

    //? Simulate an API call
    const [fakeLoading, setFakeLoading] = useState(false)
    useEffect(() => {
        const haveClinic = Object.keys(clinic).length > 0
        if (haveClinic) {
            setFakeLoading(false)
            setTimeout(() => {
                setFakeLoading(true)
            }, getRandomNumber(300, 1000));
        } else {
            setTimeout(() => {
                setFakeLoading(false)
            }, 500);
        }
    }, [clinic])

    return (
        <Animated.View
            style={[
                styles.animation_container,
                {
                    transform: [
                        { translateY: interpolateModalPosition }
                    ],
                }
            ]}
        >
            {
                fakeLoading
                    ? <Clinic data={clinic} />
                    : <AppLoading />
            }
        </Animated.View>
    )
}

function Clinic(props) {
    const [data, setData] = useState({})
    useEffect(() => {
        const _data = props?.data
        const haveData = Object.keys(_data).length > 0
        if (haveData) {
            setData(_data)
        } else {
            setTimeout(() => {
                setData(_data)
            }, 1000);
        }
    }, [props?.data])

    // todo hold data after user select null
    return (
        <View style={styles.clinic_container}>
            <Text>{data.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    animation_container: {
        width: "100%",
        height: "30%",
        bottom: 0,
        zIndex: 1,
        position: "absolute",
    },
    clinic_container: {
        backgroundColor: "red",
        flex: 1,
    }
})