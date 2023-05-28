import React, { useContext, useEffect, useState } from "react"
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    View
} from "react-native"
import { AppointmentContext } from "../../../../context/appoiment"
import Map from "../../../components/Map"
import AppointmentHeader from "../Header"
import { buildMarkers } from "./utils/markers"
import ClinicModal from "./components/ClinicModal"
import DogtorView from "../../../components/DogtorView"
import { useNavigation } from "@react-navigation/native"
import routes from "../../../routes"

export default function SecondStep() {
    // Declaring variables
    const { appointment, getMapPivot, getAvailableClinics } = useContext(AppointmentContext)
    const [selectedClinic, setSelectedClinic] = useState({})
    const [eventQueue, setEventQueue] = useState([])
    const [markers, setMarkers] = useState([])
    // TODO set default lat and long to somewhere not in middle of ocean
    const [mapPivot, setMapPivot] = useState({ lat: 0, long: 0 })

    // Update Map Component origin region
    useEffect(() => {
        setMapPivot(getMapPivot())
    }, [appointment])

    // Fill Map Component with Clinics Markers
    useEffect(() => {
        const { lat: mapRegionLatitude, long: mapRegionLongitude } = mapPivot

        if (mapRegionLatitude && mapRegionLongitude) {
            setMarkers(
                buildMarkers(mapRegionLatitude, mapRegionLongitude, getAvailableClinics(), handleSelectedClinic)
            )
        }
    }, [mapPivot])

    // Callback function to handle selected clinic on MapView
    function handleSelectedClinic(clinic) {
        let nextQueue = eventQueue
        nextQueue.push(clinic)
        setEventQueue(nextQueue)
        setSelectedClinic(eventQueue[eventQueue.length - 2])
    }

    return (
        <DogtorView container_style={styles.container}>
            <AppointmentHeader step={2} />
            <ClinicModal
                clinic={selectedClinic}
            />
            <View style={styles.map}>
                {
                    markers
                    && <MapViewWrapper mapPivot={mapPivot} markers={markers} handleSelectedClinic={handleSelectedClinic} />
                }
            </View>
        </DogtorView>
    )
}

const MapViewWrapper = (props) => {
    const navigate = useNavigation().navigate
    const { mapPivot, markers, handleSelectedClinic } = props

    return (
        <View style={{
            flex: 1,
        }}>
            <View style={{
                position: "absolute",
                width: "100%",
                height: 50,
                zIndex: 2,
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 16,
            }}>
                <TouchableOpacity onPress={() => { navigate(routes.FLUXO_AGENDAMENTO_1) }}><Image source={require('../../../assets/images/voltar.png')} /></TouchableOpacity>
                <TouchableOpacity onPress={() => { navigate(routes.TELA_MENU) }}><Image source={require('../../../assets/images/cancel.png')} /></TouchableOpacity>
            </View>
            <Map
                pivot={mapPivot}
                markers={markers}
                callback={handleSelectedClinic}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 16,
    },
    map: {
        flex: 1,
    }
})