import { Signup } from '../models/SignupSchema.js';
import { Cart } from '../models/CartSchema.js';
import bcrypt from 'bcrypt';

export const SignupController = async(req,res)=>{
    const {email, username, mobilenumber, password, confirmpassword} = req.body
    console.log(email, username, mobilenumber, password, confirmpassword)

    if(!email || !username || !mobilenumber || !password || !confirmpassword)
        return res.status(401).json({message: "All Fileds Required"})

    const existinguser = await Signup.findOne({email})
    if(existinguser)
        return res.status(401).json({message: "User Already Existed"})

    if(confirmpassword!==password)
        return res.status(401).json({message: "Confirm Password is not matched"})

    const hashedPassword = await bcrypt.hash(password,10)

    const newuser = new Signup({
        email: email,
        username: username,
        mobilenumber: mobilenumber,
        password: hashedPassword,
    })
    newuser.save()

    const newusercart = new Cart({
        user: email,
        cart: []
    })
    newusercart.save()

    res.status(200).json({message: "Signup Successfuuly"})
}