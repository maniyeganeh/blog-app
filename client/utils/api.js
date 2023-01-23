import axios from "axios"

const BASE_URL = `http://localhost:8080`

export const getPosts = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/posts`)

        return data
    }
    catch (err) {
        console.log(err);
    }
}