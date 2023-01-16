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
            const { data } = await axios({
                url: `${baseUrl}/auth/login`,
                method: "POST",
                data: { email, password },
                config
            }

            )
            if (typeof window !== "undefined") {
                localStorage.setItem("userToken", data.token)
            }
            console.log(data);

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

export const registerUser = createAsyncThunk(
    "auth/register",
    async ({ firstName, lastName, email, password, picturePath, occupation, role }, { rejectWithValue }) => {
        try {
            const config = {
                header: {
                    'Content-Type': 'application/json'
                }
            }
            await axios.post(`${baseUrl}/auth/signup`, { firstName, lastName, email, password, picturePath, occupation, role },
                config
            )
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