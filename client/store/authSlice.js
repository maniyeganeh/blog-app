import { createSlice } from "@reduxjs/toolkit"
import { loginUser, registerUser, getUser } from "./authActions"
const initialState = {
    auth: "false",
    userInfo: {},
    token: typeof window !== "undefined" ? localStorage?.getItem("userToken") : null,
    loading: false,
    error: null,
    success: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        logOut: (state) => {
            state.userInfo = {};
            state.token = null;
            typeof window !== "undefined" ? localStorage?.removeItem("userToken") : "";
            typeof window !== "undefined" ? localStorage?.removeItem("userId") : ""
        }
    },
    extraReducers: {
        [getUser.pending]: (state) => {
            state.loading = true;
            state.error = null
        },
        [getUser.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.error = null;
            state.userInfo = payload
        },
        [getUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [loginUser.pending]: (state) => {
            state.loading = true;
            state.error = null
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.userInfo = payload.user
            state.token = payload.token
            state.error = false
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
export const { logOut } = authSlice.actions
export default authSlice.reducer