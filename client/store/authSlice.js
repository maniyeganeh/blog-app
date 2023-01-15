import { createSlice } from "@reduxjs/toolkit"
import { loginUser, registerUser } from "./authActions"
const initialState = {
    auth: "false",
    userInfo: {},
    token: typeof window !== "undefined" ? localStorage.getItem("userToken") : null,
    loading: false,
    error: null,
    success: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    extraReducers: {
        [loginUser.pending]: (state) => {
            state.loading = true;
            state.error = null
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.userInfo = payload.user
            state.token = payload.token
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },

        [registerUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.success = true
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        }
    }

})

export default authSlice.reducer