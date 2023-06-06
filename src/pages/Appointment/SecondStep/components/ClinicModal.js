import React, { useState, useEffect, useRef, useContext } from "react"
import { Animated, Easing, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import AppLoading from "../../../../components/AppLoading";
import { AppointmentContext } from "../../../../../context/appoiment";
import { getRandomNumber } from "../../../../utils/numbers";
import { useNavigation } from "@react-navigation/native";
import 'moment/locale/pt-br';
import moment from "moment";
import * as colors from "../../../../constants/colors";
import routes from "../../../../routes";
import GoNext from "../../../../components/GoNext";

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
                    : <View style={{ padding: 100, backgroundColor: colors.DOGTOR_WHITE }}><AppLoading /></View>
            }
        </Animated.View>
    )
}

function Clinic(props) {
    const { setDateClinicAndTime } = useContext(AppointmentContext)

    const navigate = useNavigation().navigate

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

    const { available_dates } = data
    const [selectedDate, setSelectedDate] = useState()
    const [availableTimes, setAvailableTimes] = useState([])
    const [selectedTime, setSelectedTime] = useState()
    const [isGoNextDisabled, setGoNextDisabled] = useState(true)

    useEffect(() => {
        const haveSelectedDate = Object.keys(selectedDate || {}).length > 0
        const haveSelectedTime = Object.keys(selectedTime || {}).length > 0
        if (haveSelectedDate && haveSelectedTime) {
            setGoNextDisabled(false)
        } else {
            setGoNextDisabled(true)
        }
    }, [selectedDate, selectedTime])

    const goNext = () => {
        setDateClinicAndTime(selectedDate.date, data, selectedTime.time)
        navigate(routes.FLUXO_AGENDAMENTO_4)
    }

    return (
        <View style={styles.clinic_container}>
            <View style={styles.clinic_wrapper}>
                <Text style={styles.dateComponentTitle}>Datas disponíveis</Text>
                <View>
                    <View style={styles.dateWrapper}>
                        <ScrollView
                            horizontal={true}
                        >
                            {
                                available_dates !== undefined && Object.keys(available_dates).length > 0
                                    ?
                                    available_dates.map((date) => {
                                        const isSelected = selectedDate?.id === date.id

                                        return (
                                            <View key={date.id}>
                                                <DateComponent id={date.id} date={date} isSelected={isSelected} callback={(d) => { setSelectedDate(d); setAvailableTimes(d?.available_times || []) }} />
                                            </View>
                                        )
                                    })
                                    : <Text>No dates found</Text>
                            }
                        </ScrollView>
                    </View>

                    <View style={styles.timeWrapper}>
                        <ScrollView
                            horizontal={true}
                        >
                            {
                                availableTimes.length > 0
                                    ?
                                    availableTimes.map((time, index) => {
                                        const isSelected = selectedTime?.id === time.id

                                        return (
                                            <View key={index}>
                                                <TimeComponent time={time} isSelected={isSelected} callback={setSelectedTime} />
                                            </View>
                                        )
                                    })
                                    : <TimeComponent ghost={true} />
                            }
                        </ScrollView>
                    </View>
                </View>

                <GoNext onPress={goNext} disabled={isGoNextDisabled} />
            </View>
        </View>
    )
}

function DateComponent(props) {
    const { date, isSelected, callback } = props

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const day = moment(date.date).format("DD")
    const month = capitalize(moment(date.date).locale("pt-br").format("MMMM"))
    const weekday = capitalize(moment(date.date).locale("pt-br").format("ddd"))

    const dayColor = isSelected ? colors.DOGTOR_WHITE : "black"
    const textColor = isSelected ? colors.DOGTOR_WHITE : colors.DOGTOR_GRAY

    return (
        <TouchableOpacity onPress={() => callback(date)}>
            <View style={[
                styles.dateComponent,
                {
                    backgroundColor: isSelected ? colors.DOGTOR_BLUE : colors.DOGTOR_WHITE,
                }
            ]}>
                <Text style={[styles.dateSubText, { color: textColor }]}>{month}</Text>
                <Text style={[styles.dateText, { color: dayColor }]}>{day}</Text>
                <Text style={[styles.dateSubText, { color: textColor }]}>{weekday}</Text>
            </View>
        </TouchableOpacity>
    )
}

function TimeComponent(props) {
    const { time: _time, isSelected, ghost, callback } = props
    const { time } = _time || "00:00"

    return (
        <TouchableOpacity onPress={() => callback(_time)}>
            <View style={[
                styles.timeComponent,
                {
                    backgroundColor: ghost ? "#0000" : isSelected ? colors.DOGTOR_BLUE : colors.DOGTOR_GRAY,
                }
            ]}>
                {
                    ghost
                        ? <Text style={{ color: "white", fontWeight: "bold", fontSize: 12 }}>00:00</Text>
                        : <Text style={{ color: "white", fontWeight: "bold", fontSize: 12 }}>{time}</Text>
                }
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    animation_container: {
        width: "100%",
        // height: "40%",
        bottom: 0,
        zIndex: 1,
        position: "absolute",
    },
    clinic_container: {
        backgroundColor: "white",
        flex: 1,
        padding: 8,

        // borderColor: "blue",
        // borderWidth: 1,
    },
    clinic_wrapper: {
        flex: 1,

        flexDirection: "column",
        justifyContent: "space-between",

        // borderColor: "green",
        // borderWidth: 1,
    },
    dateComponentTitle: {
        fontSize: 14,
        fontWeight: "bold",
    },
    dateWrapper: {
        flexDirection: "row",
    },
    dateComponent: {
        padding: 16,
        margin: 8,
        borderRadius: 8,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    dateText: {
        fontSize: 26,
    },
    dateSubText: {
        fontSize: 12,
    },
    timeWrapper: {
        flexDirection: "row",
    },
    timeComponent: {
        margin: 8,

        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 12,
        paddingRight: 12,

        borderRadius: 8,

        alignItems: "center",
    },
})