import Post from "../models/Post.js"
import User from "../models/User.js"

export const createPost = async (req, res) => {
    try {
        const { title, subtitle, description, category, creator } = req.body;
        const picturePath = req.files
        const post = new Post({
            title,
            subtitle,
            description,
            picturePath,
            category,
            creator
        })
        let user;
        user = await User.findById(creator)
        if (!user) {
            res.status(404).json({ message: "user not found" })

        }
        await post.save()
        user.posts.push(post)
        await user.save()

        res.status(201).json(post)

    }
    catch (err) {
        res.status(409).json({ message: err.message })
    }
}
export const getPosts = async (req, res) => {
    try {
        const post = await Post.find()
        res.status(200).json(post)
    }
    catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const getSinglePost = async (req, res) => {
    try {
        const postId = req.params.postId;
        const post = await Post.findById(postId)
        if (!post) return res.status(404).json({ message: "post not found!" })
        res.status(200).json(post)
    }
    catch (err) {
        res.status(404).json({ message: err.message })
    }
}