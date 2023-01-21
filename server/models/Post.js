import mongoose, { mongo } from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    picturePath: {
        type: Array,
        default: ""
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    category: {
        type: String,
        required: true
    }
}, { timestamps: true })
const Post = mongoose.model("Post", postSchema)
export default Post