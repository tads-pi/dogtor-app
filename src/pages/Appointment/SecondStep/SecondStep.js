import React, { useContext, useEffect, useState } from "react"
import { AppointmentContext } from "../../../../context/appoiment";
import AppointmentHeader from "../Header";
import { buildMarkers } from "./utils/markers";
import ClinicModal from "./components/ClinicModal";
import DogtorView from "../../../components/DogtorView";
import Map from "../../../components/Map";
import {
    StyleSheet,
    View
} from "react-native";

export default function SecondStep() {
    // Declaring variables
    const { getUserLocation, appointment, getMapPivot, getAvailableClinics } = useContext(AppointmentContext)

    const [selectedClinic, setSelectedClinic] = useState({})
    const [eventQueue, setEventQueue] = useState([])
    const [markers, setMarkers] = useState([])
    // TODO set default lat and long to somewhere not in middle of ocean
    const [mapPivot, setMapPivot] = useState({ lat: 0, long: 0 })

    // Update Map Component origin region
    useEffect(() => {
        const { lat, long } = getMapPivot()
        if (lat === 0 && long === 0) {
            getUserLocation().then(({ latitude, longitude }) => {
                setMapPivot({ lat: latitude, long: longitude })
            })
        } else {
            setMapPivot(getMapPivot())
        }
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

    //? Simulate an API call
    const [fakeLoading, setFakeLoading] = useState(false)
    useEffect(() => {
        const haveMarkers = Object.keys(markers).length > 0
        if (haveMarkers) {
            setFakeLoading(false)
            setTimeout(() => {
                setFakeLoading(true)
            }, 1000);
        } else {
            setFakeLoading(false)
        }
    }, [markers])

    return (
        <DogtorView container_style={styles.container} hide_go_next={true} absolute_navigators={true}>
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
        </DogtorView >
    )
}

const MapViewWrapper = (props) => {
    const { mapPivot, markers, handleSelectedClinic } = props
    
    return (
        <View style={{
            flex: 1,
        }}>
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