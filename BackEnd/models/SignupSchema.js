import mongoose from "mongoose";

const SignupSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    mobilenumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export const Signup = mongoose.model('Signup',SignupSchema)
