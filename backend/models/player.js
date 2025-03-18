import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
    parent: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    playerFirstName: {
        type: String,
        required: true
    },
    playerLastName: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: false
    }
})

export default mongoose.model("player", playerSchema)