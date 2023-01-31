import axios from "axios"

const BASE_URL = `http://localhost:8080`
const token = typeof window !== "undefined" ? localStorage.getItem("userToken") : null

export const getPosts = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/posts`)

        return data
    }
    catch (err) {
        console.log(err);
    }
}

export const createPost = async (post) => {

    try {
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('userToken'),
                'Content-Type': 'multipart/form-data'
            }

        }
        const { data } = await axios.post(`${BASE_URL}/posts`, post, config)
        console.log(data);

    }
    catch (err) {
        console.log(err);
    }
}

export const getSinglePost = async (postId) => {
    try {
        const { data } = await axios(`${BASE_URL}/posts/${postId}`)

        return data
    }
    catch (err) {
        console.log(err);
    }
}