import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "./slices/userDataSlice"

export const store = configureStore({
    reducer: {
        user: userDataSlice,
    }
})