import mongoose from "mongoose";

const loginSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})

export const loginModel = mongoose.model('login', loginSchema)
