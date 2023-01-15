import { configureStore } from "@reduxjs/toolkit"
import modeSlice from "./mode"
import { setupListeners } from '@reduxjs/toolkit/query';
import authSlice from "./authSlice";

const makeStore = configureStore({
    reducer: {
        mode: modeSlice,
        auth: authSlice
    },
    devTools: true,

})


export default makeStore
