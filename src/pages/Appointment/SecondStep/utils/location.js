import React, { useContext, useEffect, useState } from 'react';
import * as Location from 'expo-location'
import { AppointmentContext } from '../../../../../context/appoiment';

/**
 * Process User location asking for permission to get it and update context with gotten latitude and longitude
 */
export default function ProcessUserLocation() {
    const [userLocation, setUserLocation] = useState({});
    const { setMapPivot } = useContext(AppointmentContext)

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                // todo handle permission not granted
                console.log('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            const { latitude, longitude } = location.coords;
            setUserLocation({ latitude, longitude });
        })();
    }, [])

    useEffect(() => {
        const { latitude, longitude } = userLocation
        setMapPivot(latitude, longitude)
    }, [userLocation])
}