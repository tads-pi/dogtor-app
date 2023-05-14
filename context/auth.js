import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState({})

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
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider