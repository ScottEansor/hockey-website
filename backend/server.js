import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import "dotenv/config"
import videoRoutes from "./routes/videos.js"
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import session from "express-session"

const app = express()
const {
    MONGO_URI,
    PORT = 5000,
    NODE_ENV = "development"
} = process.env
if (!MONGO_URI) {
    throw new Error("MONGO URI required in env")
}

//middleware
app.use(cors())//allows frontend to access backend
app.use(express.json())// allow JSON body parsing (ensures express can handle the data)
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 } }))

app.use("/api/videos", videoRoutes)
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
mongoose.connect(MONGO_URI + (NODE_ENV === "development" ? "-test" : ""))