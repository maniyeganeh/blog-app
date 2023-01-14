import { configureStore } from "@reduxjs/toolkit"
import globalSlice from "../store/index"
import { setupListeners } from '@reduxjs/toolkit/query';
import { createWrapper } from "next-redux-wrapper"
const makeStore = configureStore({
    reducer: {
        global: globalSlice
    },
    devTools: true,

})
setupListeners(makeStore.dispatch)

export default makeStore
