import express from "express"
import userModel from "../models/user.js"
import otpGenerator from 'otp-generator'

const router = express.Router()

//client sends email on body of request
//we look up user by email
//if we do not find user with email, then we send back a 400 error
// generate a new one time password
//save that password on there document as well as a time stamp + 5min
//send an email to that email w/ a OTP
//send back 200 status

router.post("/", async (req, res) => {
    try {
        const email = req.body.email
        const user = await userModel.findOne({ email })
        if (!user) {
            res.sendStatus(404)
            return
        }
        const otp = otpGenerator.generate(6, { digits: false, lowerCaseAlphabets: false, specialChars: false });
        res.sendStatus(200)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})


export default router
