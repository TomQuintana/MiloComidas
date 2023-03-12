import express from 'express'
import {registerFood, modifyFood, getByFilterFood} from '../controllers/food.controller.js'

const router = express.Router()

router.post('/registerFood', registerFood)
router.put('/modifyFood', modifyFood)
router.get('/take-food/:filter', getByFilterFood)

export default router
