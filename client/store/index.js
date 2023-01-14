import { createSlice } from "@reduxjs/toolkit"
import { loginUser } from "./authActions"

const initialState = {
    mode: "dark",
    auth: "false",
    userInfo: {},
    token: null,
    loading: false
}

export const globalSlice = createSlice({
    name: "global",
    initialState: initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"
        },


    },
    extraReducers: {

    }
})
export const { setMode } = globalSlice.actions
export default globalSlice.reducer