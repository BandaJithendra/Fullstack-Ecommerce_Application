import mongoose from "mongoose"


const userSchema = mongoose.Schema({

    product_id:{type:Number,require:true},
    Quantity:{type:Number,require:true},
    // category:{type:String,require:true},
    // sub_category:{type:String,require:true},
    // title:{type:String,require:true},
    // description:{type:String},
    // price:{type:Number,require:true},
    // dis:{type:Number,require:true},
    // cp:{type:Number,require:true},
    // rating:{type:Number,require:true},
    // rating_count:{type:Number,require:true},
});


const cartdata=mongoose.Schema({
    user:{type:String,require:true},
    cart: [
        {
            product_id: String,
            Quantity: Number
        }
    ]
})

export const Cart = mongoose.model("CartSchema",cartdata)