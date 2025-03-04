import express from "express"
import cors from "cors"
import "dotenv/config"
import videoRoutes from "./routes/videos.js"

const app = express()

const PORT = process.env.PORT || 5000

//middleware
app.use(cors())//allows frontend to access backend
app.use(express.json())// allow JSON body parsing (ensures express can handle the data)

app.use("/api/videos", videoRoutes)

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
