import express from "express"
import { verifyToken } from "../middleware/auth.js"
import { getUser } from "../controllers/user.js"
const router = express.Router()

router.get("/:id", verifyToken, getUser)

export default router