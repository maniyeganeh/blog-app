import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import multer from "multer"
import helmet from "helmet"
import morgan from "morgan"
import path from "path"
import { fileURLToPath } from "url"
import { register } from "./controllers/auth.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/user.js"
import postRoutes from "./routes/post.js"
import { verifyToken } from "./middleware/auth.js"
import { createPost } from "./controllers/post.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);

    }
});
const fileFilter = (req, file, cb) => {
    console.log(file);
    if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg" || file.mimetype === "image/gif") {
        cb(null, true)
    } else {
        cb(null, false)
    }
}
app.use(morgan("common"))

// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())


app.use(bodyParser.json())

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).array('image', 5))
app.use("/images", express.static(path.join(__dirname, 'images')))
// const upload = multer({ storage: storage });
// console.log(upload);
// app.post("/auth/signup", upload.single("picture"), register);
// app.post("/posts", verifyToken, upload.single("picture"), createPost)
app.use("/auth", authRoutes)
app.use("/user", userRoutes)
app.use("/posts", postRoutes)
const PORT = process.env.PORT || 6060;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, () => console.log("Server port" + PORT))

}).catch((err) => console.log(err))