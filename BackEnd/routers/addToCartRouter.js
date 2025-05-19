import express from 'express';
import { AddToCartController } from '../controllers/addToCartController.js';

const AddToCartRouter = express.Router()
AddToCartRouter.post('/addToCart',AddToCartController)

export default AddToCartRouter