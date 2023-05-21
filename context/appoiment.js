import React, { createContext, useState } from 'react';
import { ALLOWED_TYPES, ALLOWED_PAYMENT_STATUS } from "../constants/appointment"

export const AppointmentContext = createContext({});

function AppointmentProvider({ children }) {
    const [appointment, setAppointment] = useState({
        type: "",
        description: "",
        map_lat: 0,
        map_long: 0,
        clinic: {
            name: "",
            street: "",
            number: "",
            phone: "",
        },
        date: "",
        time: "",
        pet: {
            id: "",
            name: "",
            breed: "",
            weight_in_kg: "", // in kg
            size_in_cm: "", // in cm
            birth_date: "",
            birth_year: "",
            profile_picture: null,
        },
        paymentStatus: "",
    })

    function setType(type) {
        if (ALLOWED_TYPES.includes(type)) {
            setAppointment({
                ...appointment,
                type,
            })
        } else {
            console.log("[ERROR] Appointment type not allowed")
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
            clinic,
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
            console.log("[ERROR] Payment status not allowed")
        }
    }

    function getAvailableClinics() {
        const clinics = [
            {
                name: "Veterinária Dogtor",
                street: "Rua dos Bobos",
                number: "01",
                phone: "(11) 99999-9999",
                image: () => require("../src/assets/images/clinics/vet_01.jpg")
            },
            {
                name: "Vet Clinics",
                street: "Cidade de Equestria",
                number: "50",
                phone: "(11) 91234-5678",
                image: () => require("../src/assets/images/clinics/vet_02.jpg")
            },
            {
                name: "Cachorrobô e Gato Mecânico",
                street: "Radiator Springs",
                number: "95",
                phone: "(11) 98765-4321",
                image: () => require("../src/assets/images/clinics/vet_03.jpg")
            },
            {
                name: "Clínica Veterinária do Dr. Dolittle",
                street: "Rua dos Vets",
                number: "123",
                phone: "(11) 91234-5678",
                image: () => require("../src/assets/images/clinics/vet_04.jpg")
            },
            {
                name: "Veterinários do Bairro",
                street: "Rua do Bairro",
                number: "1000",
                phone: "(11) 91234-5678",
                image: () => require("../src/assets/images/clinics/vet_05.jpg")
            },
        ]

        return clinics
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

    return (
        <AppointmentContext.Provider value={{ appointment, setAppointment, setType, setDescription, setClinic, setDate, setTime, setPet, setPaymentStatus, getMapPivot, setMapPivot, getAvailableClinics }}>
            {children}
        </AppointmentContext.Provider>
    )
}

export default AppointmentProvider