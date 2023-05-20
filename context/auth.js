import React, { createContext, useState } from 'react';
import { encode } from 'base-64'

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        birthDate: "",
        cpf: "",
        pets: [],
        isLoggedIn: false,
        address: {
            street: "",
            number: "",
            complement: "",
            city: "",
            state: "",
            zipCode: "",
        },
    })

    const registerPersonalInfo = (name, birthDate, cpf,) => {
        setUser({
            ...user,
            name: name,
            birthDate: birthDate,
            cpf: cpf,
        })
    }

    const registerAddress = (zipCode, street, number, complement, city, state) => {
        setUser({
            ...user,
            address: {
                street: street,
                number: number,
                complement: complement,
                city: city,
                state: state,
                zipCode: zipCode,
            }
        })
    }

    const registerAccessData = (email, phone, password) => {
        setUser({
            ...user,
            email: email,
            phone: phone,
            password: encode(password),
            isLoggedIn: true,
        })
    }

    function login(user) {
        if (user.email !== "") {
            setUser({
                name: user.name,
                email: user.email,
                pets: user.pets,
                isLoggedIn: true,
            })
        }
    }

    function logout() {
        setUser({
            isLoggedIn: false,
        })
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, registerPersonalInfo, registerAddress, registerAccessData }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider