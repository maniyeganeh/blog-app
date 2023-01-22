import { configureStore } from "@reduxjs/toolkit"
import modeSlice from "./mode"
import { setupListeners } from '@reduxjs/toolkit/query';
import authSlice from "./authSlice";
import menuSlice from "./menu";

const makeStore = configureStore({
    reducer: {
        mode: modeSlice,
        auth: authSlice,
        menu: menuSlice
    },
    devTools: true,

})


export default makeStore
