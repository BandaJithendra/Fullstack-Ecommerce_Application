import { Signup } from "../models/SignupSchema.js";
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const SECRET_KEY = process.env.SECRET_KEY
export const LoginController = async(req,res)=>{
    const {email, password} = req.body
    console.log(email, password)
    // const jwt = JsonWebTokenError
    if(!email || !password)
        return res.status(401).json({message: "All Fileds Required"})
    
    const data = await Signup.findOne({email})
    if(!data)
        return res.status(401).json({message:"User not Found"})
    
    const isMatch = await bcrypt.compare(password,data.password)
    if(!isMatch)
        return res.status(401).json({message: "Password not matched"})
    
    var token = JWT.sign(
        {
            email: email,
            user: data.username
        },
        SECRET_KEY
    )
    console.log("Token....", token)

    res.status(200).json({message: "Login Successfully",token})


}