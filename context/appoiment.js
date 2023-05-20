import React, { createContext, useState } from 'react';
import { ALLOWED_TYPES, ALLOWED_PAYMENT_STATUS } from "../constants/appointment"
import moment from 'moment';

export const AppointmentContext = createContext({});

function AppointmentProvider({ children }) {
    const [appointment, setAppointment] = useState({
        type: "",
        description: "",
        clinic: {
            name: "",
            address: "",
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

    return (
        <AppointmentContext.Provider value={{ setType, setDescription, setClinic, setDate, setTime, setPet, setPaymentStatus }}>
            {children}
        </AppointmentContext.Provider>
    )
}

export default AppointmentProvider