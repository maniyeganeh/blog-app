import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    mode: typeof window !== "undefined" ? localStorage.getItem("mode") : "dark"

}

export const modeSlice = createSlice({
    name: "mode",
    initialState: initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
            if (typeof window !== "undefined") {
                localStorage.setItem("mode", state.mode)
            }
        },


    },
    extraReducers: {

    }
})
export const { setMode } = modeSlice.actions
export default modeSlice.reducer