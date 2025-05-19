import express from 'express';
import { SignupController } from '../controllers/signupController.js';

const SignupRouter = express.Router()
SignupRouter.post('/signup',SignupController)

export default SignupRouter