import express from "express"
import { createPost, getPosts, getSinglePost } from "../controllers/post.js"
import { verifyToken } from "../middleware/auth.js"

const router = express.Router()
router.post("/", verifyToken, createPost)
router.get("/", getPosts)
router.get("/:postId", getSinglePost)

export default router