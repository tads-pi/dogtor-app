import { createSlice } from '@reduxjs/toolkit'

export type UserData = {
    name: string,
    pets: Pet[],
}

export type Pet = {
    id: string,
    name: string,
    race: string,
    peso: string,
    altura: string,
    data_de_nascimento: string,
    ano_de_nascimento: string,
    profile_picture: () => any,
}

const initialState = {
    user: {
        name: "Unknown",

        pets: [
            {
                id: "123",
                name: "Thor",
                race: "Bulldog Francês",
                peso: "5", // in kg
                altura: "50", // in cm
                data_de_nascimento: "01/01",
                ano_de_nascimento: "2020",
                profile_picture: () => require("../../assets/images/pets/thor_pp.png"),
            },
            {
                id: "321",
                name: "Fernando",
                race: "Bulldog Francês",
                peso: "3", // in kg
                altura: "30", // in cm
                data_de_nascimento: "01/01",
                ano_de_nascimento: "2022",
                profile_picture: () => require("../../assets/images/pets/fernando_pp.png"),
            }
        ],
    }
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.user.name = action.payload;
        },
        addPet: (state, action) => {
            state.user.pets.push(action.payload);
        },
        removePet: (state, action) => {
            let newPets: Pet[] = []
            state.user.pets.map((pet) => {
                if (action.payload !== pet.id) {
                    newPets.push(pet as Pet)
                }
            })

            state.user.pets = newPets;
        },
    }
})

export const {
    setName,
    addPet,
    removePet,
} = userSlice.actions;

export const selectUserData = (state: any) => state.user.user

export default userSlice.reducer;