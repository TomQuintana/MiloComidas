import {
  searchByType,
  validateType, 
  verifyStock, 
  takeAllMealsByStock
} from '../helpers/functions.helpers.js'

import {generateSaveFood, getFood} from '../helpers/dbActions.js'

const defaultTypes = ['fruta','verdura','desayuno','pollo','pescado','otros']

const registerFood = async (req, res) => {
  const {type} = req.body
  const trueType = validateType(type, defaultTypes)

  if(!trueType) {
    res.status(404).json({mag: 'The entered type is no valid, please enter a valid type'})
    return
  }

  const mealRes = await generateSaveFood(req.body)
  return res.json({mealRes})
}

const modifyFood = async (req,res) => {
  const {stock, type} = req.body

  const meals = await getFood()
  const foodByTypeSelection = searchByType(type, meals)

  foodByTypeSelection[0].stock = stock

  const mealRes = await generateSaveFood(foodByTypeSelection[0])
  const mealVerifyStock = verifyStock(mealRes)

  res.json({
    msg: mealVerifyStock.msg,
    meal: mealVerifyStock.meal
  })
}

const getByFilterFood = async (req, res) => {
  const meals = await getFood()
  const {filter} = req.params
  const mealsSelect = takeAllMealsByStock(meals, filter)
  return res.json({
    mealsSelect
  })
}

export {
  registerFood,
  modifyFood,
  getByFilterFood
}
