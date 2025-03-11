import express from "express"
import userModel from "../models/user.js"

const router = express.Router()

router.post("/", async (req, res) => {
    try {
        await userModel.create(req.body)
        res.sendStatus(201)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})

router.get('/', async (req, res) => {
    try {
        //TODO: verify that the user making this request is an admin..
        const users = await userModel.find({})
        res.json(users)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})

export default router
