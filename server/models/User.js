import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50
    },
    password: {
        type: String,
        required: true,
        min: 5
    },
    picturePath: {
        type: Array,
        default: "",
        required: true
    },
    occupation: String,
    role: {
        type: String,
        default: "user"
    },

    posts: [{
        type: mongoose.Types.ObjectId,
        ref: "Post",
    }],

}, { timestamps: true })

const User = mongoose.model("User", userSchema)
export default User