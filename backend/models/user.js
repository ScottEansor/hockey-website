import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    playerFirstName: {
        type: String,
        required: true
    },
    playerLastName: {
        type: String,
        required: true
    },
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
    birthday: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    cellPhone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: false
    }
})

export default mongoose.model("user", userSchema)