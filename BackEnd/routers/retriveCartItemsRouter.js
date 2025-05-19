import express from 'express';
import { RetriveCartItemsController } from '../controllers/retriveCartItemsController.js';

const RetriveCartItemsRouter = express.Router()
RetriveCartItemsRouter.post('/cart',RetriveCartItemsController)

export default RetriveCartItemsRouter