import { Cart } from "../models/CartSchema.js"
// export const AddToCartController = async (req,res)=>{
//     const {email,product_id} = req.body
//     const user = Cart.findOne({email})

//     if(user){
//         // user.updateOne({user:email}, {$push:{cart:{product_id:product_id, Quantity:1}}})
//         await user.updateOne(
//             { email: email }, // Match the user by email
//             { $push: { cart: { product_id: product_id, Quantity: 1 } } }, // Push new product to cart
//             (err, res) => {
//               if (err) {
//                 console.error(err);
//               } else {
//                 console.log("Cart updated successfully:", res);
//               }
//             }
//           );

//         return res.status(200).json({message: "Item Added Successfully"}) 
//     }
//     return res.status(401).json({message: "Item Added UnSuccessfully"})

// }


// export const AddToCartController = async (req, res) => {
//     try {
//       const { email, product_id } = req.body; // Destructure email and product_id from req.body
//       const user = Cart.findOne({email})
  
//       // Use async/await for Mongoose operation
//       await user.updateOne(
//         { email: email },
//         { $push: { cart: { product_id: product_id, Quantity: 1 } } }
//       );
  
//       res.status(200).json({ message: "Product added to cart successfully" });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Error adding product to cart" });
//     }
//   };


// import { CartSchema } from "../models/CartSchema.js";

export const AddToCartController = async (req, res) => {

    // const { user, itemDetails } = req.body;
    const { email, product_id } = req.body;
    console.log(email,product_id)

    const userData = await Cart.findOne({ user: email});
    // console.log("userdata",userData)

    // if (!userData) {
    //     console.log("if...")

    //     const newUser = new Cart(
    //         {
    //             user: email,
    //             cart: [
    //                 {
    //                     product__id: product_id,
    //                     Quantity: 1
    //                 }
    //             ]
    //         }
    //     )

    //     await newUser.save();
    // }
    // else {

        const prevRef = [...userData.cart];
        let flag = 0
        for (let item of prevRef) {
            if (item.product_id == product_id) {
                flag=1
                if(item.Quantity===10){
                    return res.status(404).json({message:"Reached Max Cart size"})

                }
            }

        }

        if(flag){
            
            await Cart.updateOne(
                {user:email,"cart.product_id":product_id},
                {$inc:{"cart.$.Quantity":1}}
            )

        }
        else {
            await Cart.updateOne({ user: email }, {
                $push: {
                    cart: {

                        product_id: product_id,
                        Quantity: 1,

                    }

                }
            })
        }


    // }
    const data = await Cart.findOne({ user: email })
    console.log("......",userData)
    res.json({ message: "success", data})

}
  