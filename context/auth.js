import React, { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { encode } from 'base-64'
import { set } from 'react-hook-form';

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

    // DEBUG
    // useEffect(() => {
    //     console.log("user: ", user);
    // }, [user])

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

    const [inRegisterPet, setRegisterPet] = useState({})

    // DEBUG
    // useEffect(()=> {
    //     console.log("inRegisterPet: ", inRegisterPet);
    // }, [inRegisterPet])

    function addPetInfo(pet) {
        
        let newPet = inRegisterPet

        if (Object.keys(newPet).length === 0) {
            newPet = {
                id: Math.floor(Math.random() * 1000),
            }
        }

        setRegisterPet({
            ...newPet,
            ...pet,
        })
    }

    function addPet(profile_picture, banner_picture) {
        inRegisterPet.profile_picture = profile_picture
        inRegisterPet.banner_picture = banner_picture

        const userPets = user.pets
        userPets.push(inRegisterPet)

        setUser({
            ...user,
            pets: userPets
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
        <AuthContext.Provider value={{ user, login, logout, registerPersonalInfo, registerAddress, registerAccessData, inRegisterPet, addPetInfo, addPet }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider