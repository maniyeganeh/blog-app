import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
const baseUrl = 'http://localhost:8080'
const token = typeof window !== "undefined" ? localStorage.getItem("userToken") : null

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
                localStorage.setItem("userId", data.user._id)
            }

            toast.success(data.user.firstName + " " + data.user.lastName + " " + "خوش آمدی", {
                position: 'top-right',
                style: {
                    direction: 'rtl',
                    fontFamily: 'Iran-sans-reg'

                }
            })
            return data
        }
        catch (error) {
            toast.error('  اطلاعات وارد شده اشتباه است', {
                position: 'top-right',
                style: {
                    direction: 'rtl',
                    fontFamily: 'Iran-sans-reg'

                }
            })

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