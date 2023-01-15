import { createSlice } from "@reduxjs/toolkit"
import { loginUser } from "./authActions"

const initialState = {
    mode: "dark",

}

export const modeSlice = createSlice({
    name: "mode",
    initialState: initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"
        },


    },
    extraReducers: {

    }
})
export const { setMode } = modeSlice.actions
export default modeSlice.reducer