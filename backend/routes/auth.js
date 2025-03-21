import express from "express"
import userModel from "../models/user.js"
import otpGenerator from 'otp-generator'
import nodemailer from 'nodemailer'

const router = express.Router()

//client sends email on body of request
//we look up user by email
//if we do not find user with email, then we send back a 400 error
// generate a new one time password
//save that password on there document as well as a time stamp + 5min
//send an email to that email w/ a OTP
//send back 200 status
const transporter = nodemailer.createTransport({
    secure: false,
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
})

router.post("/generate-otp", async (req, res) => {
    try {
        const email = req.body.email
        const user = await userModel.findOne({ email })
        if (!user) {
            res.sendStatus(404)
            return
        }
        const otp = otpGenerator.generate(6, { digits: false, lowerCaseAlphabets: false, specialChars: false });
        user.otp = otp
        user.otpExpiration = Date.now() + (1000 * 60 * 5)
        await user.save()
        transporter.sendMail({
            to: email,
            subject: 'One Time Password Eansor Coaching',
            html: `Your one time password is: ${otp}`
        })
        res.sendStatus(200)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})

// expecting email and OTP from client on body
// retrieve user with that email
// if there is not that user with that email send back 404
// ask if OTP on the user is the same as the request 
//if not send 400 saying that OTP is invalid
// ask if the otp on the user is after now
//if not send 400 that OTP is expired
//generate cookie remembering users id and experation for that cookie




export default router
