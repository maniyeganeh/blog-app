import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    open: false,
    backDrop: false
}

export const menuSlice = createSlice({
    name: "menu",
    initialState: initialState,
    reducers: {
        menuOpen: state => {
            state.open = true;
            state.backDrop = true
        },
        menuClose: state => {
            state.open = false;
            state.backDrop = false
        }
    }
})
export const { menuOpen, menuClose } = menuSlice.actions;
export default menuSlice.reducer