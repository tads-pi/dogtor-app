import React, { useContext, useEffect, useState } from "react"
import {
    SafeAreaView,
    StyleSheet,
    View
} from "react-native"
import { AppointmentContext } from "../../../../context/appoiment"
import Map from "../../../components/Map"
import AppointmentHeader from "../Header"
import ProcessUserLocation from "./utils/location"
import { buildMarkers } from "./utils/markers"
import ClinicModal from "./components/ClinicModal"

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
        <SafeAreaView style={styles.container}>
            <AppointmentHeader step={2} />
            <ClinicModal
                clinic={selectedClinic}
            />
            <View style={styles.map}>
                <ProcessUserLocation />
                {
                    markers
                    && <Map
                        pivot={mapPivot}
                        markers={markers}
                        callback={handleSelectedClinic}
                    />
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
        borderColor: "green",
        borderWidth: 1,
    }
})