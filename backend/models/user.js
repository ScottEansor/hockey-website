import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    parentFirstName: {
        type: String,
        required: true
    },
    parentLastName: {
        type: String,
        required: true
    },
    secondParentFirstName: {
        type: String,
        required: false
    },
    secondParentLastName: {
        type: String,
        required: false
    },
    cellPhone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    otp: {
        type: String,
    },
    otpExpiration: {
        type: Number,
    }
})

export default mongoose.model("user", userSchema)