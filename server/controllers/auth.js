import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.js"

export const register = async (req, res) => {
    try {
        const { firstName, lastName, password, email, occupation, picturePath } = req.body;
        const salt = await bcrypt.genSalt()
        const passHash = await bcrypt.hash(password, salt)
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passHash,
            picturePath,
            occupation
        })
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message })
    }
}
export const login = async (req, res) => {

    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user) return res.status(400).json({ message: "user does not exist" })
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).json({ message: "invalid credentials" })
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        delete user.password
        res.status(200).json({ token, user })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message })
    }
}

export const getUser = async (req, res) => {
    try {
        const userId = req.params;
        const user = await User.findById(userId);
        res.status(200).json(user)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}