import { Cart } from "../models/CartSchema.js"
export const RetriveCartItemsController = async (req,res) =>{
    const {email} = req.body
    console.log("cartuser email...",email)
    const userdata = await Cart.findOne({user: email})
    // console.log("user ready...",userdata)
    if(userdata){
        const cart = [... userdata.cart]
        // console.log("user cart..",cart)
        return res.status(200).json({cart: cart})
    }
    return res.status(404).json({message:"user not found"})

}