import express from "express"
import { login, register, getUser } from "../controllers/auth.js"

const router = express.Router()

router.post("/signup", register)
router.post("/login", login)



export default router