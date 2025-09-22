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
    },
    isAdmin : {
        type: Boolean,
        default: false
    }
}, {
    toJSON: {
        virtuals:true
    }
})

userSchema.virtual('players',{
    localField: '_id',
    foreignField: 'parent',
    justOne: false,
    ref: 'player'
})

export default mongoose.model("user", userSchema)