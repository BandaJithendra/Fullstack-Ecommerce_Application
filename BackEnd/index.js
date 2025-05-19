import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import SignupRouter from './routers/signupRouter.js';
import LoginRouter from './routers/loginRouter.js';
import AddToCartRouter from './routers/addToCartRouter.js';
import cors from 'cors'
import RetriveCartItemsRouter from './routers/retriveCartItemsRouter.js';
import DashBoardRouter from './routers/dashboardRouter.js';

const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000
const mongo_uri = process.env.MONGO_URL
// console.log(mongo_uri)

const mongoConnection = async () => {
    try {
        await mongoose.connect(mongo_uri)
        console.log("DataBase Conneted Successfully....")
    }
    catch (err) {
        console.log("Error Occured ", err)
    }
}
mongoConnection()

app.use(SignupRouter)
app.use(LoginRouter)
app.use(AddToCartRouter)
app.use(RetriveCartItemsRouter)
app.use(DashBoardRouter)


app.listen(PORT, () => console.log(`Server is running at port ${PORT}`))

