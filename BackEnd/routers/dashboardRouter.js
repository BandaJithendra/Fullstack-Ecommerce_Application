import express from 'express'

import { DashBoardController } from '../controllers/dashboardController.js'

const DashBoardRouter = express.Router()
DashBoardRouter.post('/tokenverified',DashBoardController)

export default DashBoardRouter