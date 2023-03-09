import express from 'express'
import {registerFood} from '../controllers/food.controller.js'

const router = express.Router()

router.post('/registerFood', registerFood)

export default router
