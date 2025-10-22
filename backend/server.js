import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import "dotenv/config"
import videoRoutes from "./routes/videos.js"
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import session from "express-session"
import userModel from "./models/user.js"
import ConnectMongoDBSession from "connect-mongodb-session"
import playerRoutes from "./routes/players.js"
import groupRoutes from "./routes/groups.js"

const app = express()
const {
    MONGO_URI,
    PORT = 5000,
    NODE_ENV = "development"
} = process.env
if (!MONGO_URI) {
    throw new Error("MONGO URI required in env")
}

const mongoURI = MONGO_URI + (NODE_ENV === "development" ? "-test" : "")

const MongoDBStore = ConnectMongoDBSession(session);
const sessionStore = new MongoDBStore({
    uri: mongoURI,
    collection: 'session'
})

//middleware
app.use(cors())//allows frontend to access backend
app.use(express.json())// allow JSON body parsing (ensures express can handle the data)
// session cookie signout time in mageAge property 
app.use(session({ secret: 'keyboard cat',  resave: true, saveUninitialized: true, store: sessionStore, cookie: {maxAge: 1000 * 60 * 60 * 24 * 30 } }))
app.use(async (req, res, next) => {
    if (req.session.userId) {
        req.user = await userModel.findById(req.session.userId)
    }
    next()
})

app.use("/api/videos", videoRoutes)
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/players", playerRoutes)
app.use("/api/groups", groupRoutes)

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
mongoose.connect(mongoURI)