import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import "dotenv/config"
import videoRoutes from "./routes/videos.js"

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

app.use("/api/videos", videoRoutes)

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
mongoose.connect(MONGO_URI + (NODE_ENV === "development" ? "-test" : ""))