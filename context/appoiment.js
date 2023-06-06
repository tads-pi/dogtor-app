import React, { createContext, useEffect, useState } from 'react';
import { ALLOWED_TYPES, ALLOWED_PAYMENT_STATUS, FLOWS, DEFAULT_FLOW, APPOINTMENT_TYPES } from "../constants/appointment"
import * as Location from 'expo-location'

export const AppointmentContext = createContext({});

function AppointmentProvider({ children }) {
    const [appointment, setAppointment] = useState({
        type: "",
        description: "",
        map_lat: 0,
        map_long: 0,
        flow: DEFAULT_FLOW,
        clinic: {
            name: "",
            street: "",
            number: "",
            phone: "",
            zip_code: "",
            image: () => { },
            available_dates: []
        },
        date: "",
        time: "",
        pet: {},
        pet_view: {},
        paymentStatus: "",
    })

    function setType(type) {
        if (APPOINTMENT_TYPES.includes(type)) {
            setAppointment({
                ...appointment,
                type,
            })
        } else {
            console.error("[ERROR] Appointment type not allowed")
        }
    }

    function setDescription(description) {
        setAppointment({
            ...appointment,
            description,
        })
    }

    function setClinic(clinic) {
        setAppointment({
            ...appointment,
            clinic: clinic,
        })
    }

    function setDate(date) {
        setAppointment({
            ...appointment,
            date,
        })
    }

    function setTime(time) {
        setAppointment({
            ...appointment,
            time,
        })
    }

    function setDateClinicAndTime(date, clinic, time) {
        setAppointment({
            ...appointment,
            date,
            time,
            clinic: clinic,
        })
    }

    function setPet(pet) {
        setAppointment({
            ...appointment,
            pet,
        })
    }

    function setPaymentStatus(paymentStatus) {
        if (ALLOWED_PAYMENT_STATUS.includes(paymentStatus)) {
            setAppointment({
                ...appointment,
                paymentStatus,
            })
        } else {
            console.error("[ERROR] Payment status not allowed")
        }
    }

    function getAvailableClinics() {
        return available_clinics
    }

    function getMapPivot() {
        return {
            lat: appointment.map_lat,
            long: appointment.map_long,
        }
    }

    function setMapPivot(lat, long) {
        setAppointment({
            ...appointment,
            map_lat: lat,
            map_long: long,
        })
    }

    function setFlow(flow) {
        if (!FLOWS.includes(flow)) {
            console.error("[ERROR] Flow not allowed")
        }

        setAppointment({
            ...appointment,
            flow,
        })
    }

    function setPetView(pet) {
        setAppointment({
            ...appointment,
            pet_view: pet,
        })
    }

    async function getUserLocation() {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status != 'granted') {
            console.error("location permission denied");
        }

        let location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;

        return { latitude, longitude }
    }

    // DEBUG
    // useEffect(() => {
    //     console.log(JSON.stringify(appointment, null, 2));
    // }, [appointment])

    return (
        <AppointmentContext.Provider value={{ appointment, setAppointment, setType, setDescription, setClinic, setDate, setTime, setPet, setPetView, setPaymentStatus, getMapPivot, setMapPivot, getAvailableClinics, setFlow, setDateClinicAndTime, getUserLocation }}>
            {children}
        </AppointmentContext.Provider>
    )
}

export default AppointmentProvider

const available_dates = [
    {
        id: 124,
        date: "2023-05-29",
        available_times: [
            {
                id: 141,
                time: "08:00",
            },
            {
                id: 212,
                time: "09:00",
            },
        ],
    },
    {
        id: 135,
        date: "2023-05-29",
        available_times: [
            {
                id: 1534,
                time: "08:00",
            },
            {
                id: 21,
                time: "09:00",
            },
            {
                id: 62,
                time: "10:00",
            },
        ],
    },
    {
        id: 235,
        date: "2023-05-29",
        available_times: [
            {
                id: 167,
                time: "08:00",
            }
        ],
    },
]

const available_clinics = [
    {
        name: "Veterinária Dogtor",
        street: "Rua dos Bobos",
        number: "01",
        phone: "(11) 99999-9999",
        zip_code: "01001-000",
        image: "vet_01",
        available_dates: available_dates
    },
    {
        name: "Vet Clinics",
        street: "Cidade de Equestria",
        number: "50",
        phone: "(11) 91234-5678",
        zip_code: "01001-000",
        image: "vet_02",
        available_dates: available_dates
    },
    {
        name: "Cachorrobô e Gato Mecânico",
        street: "Radiator Springs",
        number: "95",
        phone: "(11) 98765-4321",
        zip_code: "01001-000",
        image: "vet_03",
        available_dates: available_dates
    },
    {
        name: "Clínica Veterinária do Dr. Dolittle",
        street: "Rua dos Vets",
        number: "123",
        phone: "(11) 91234-5678",
        zip_code: "01001-000",
        image: "vet_04",
        available_dates: available_dates
    },
    {
        name: "Veterinários do Bairro",
        street: "Rua do Bairro",
        number: "1000",
        phone: "(11) 91234-5678",
        zip_code: "01001-000",
        image: "vet_05",
        available_dates: available_dates
    },
]