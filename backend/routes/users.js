import express from "express"
import userModel from "../models/user.js"

const router = express.Router()

router.post("/", async (req, res) => {
    try {
        const { isAdmin, ...data} = req.body
        await userModel.create(data)
        res.sendStatus(201)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})

router.get('/', async (req, res) => {
    try {
         if (!req.user) {
      res.sendStatus(401);
      return;
    }
    if(!req.user.isAdmin){
        res.sendStatus(401)
        return
    }
        const users = await userModel.find({})
        res.json(users)
        
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})

export default router
