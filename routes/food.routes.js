import express from 'express'
import {registerFood, modifyFood} from '../controllers/food.controller.js'

const router = express.Router()

router.post('/registerFood', registerFood)
router.put('/modifyFood', modifyFood)

export default router
