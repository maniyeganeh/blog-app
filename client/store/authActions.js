import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit"

const baseUrl = 'http://localhost:8080'

export const loginUser = createAsyncThunk(
    "auth/login",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const { data } = await axios.post(
                `${baseUrl}/auth/login`, { email, password }, config
            )
            localStorage.setItem("userToken", data.token)
            return data
        }
        catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }

        }
    }
)