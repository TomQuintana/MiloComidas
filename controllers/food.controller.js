import validateType from '../helpers/validateType.js'
import {generateSaveFood} from '../helpers/dbActions.js'

const defaultTypes = ['fruta','verdura','desayuno','pollo','pescado','otros']

const registerFood = async (req, res) => {

  const {type} = req.body
  // validateType(type, defaultTypes true si hace match
  const trueType = validateType(type, defaultTypes)

  if(!trueType) {
    res.status(404).json({mag: 'The entered type is no valid, please enter a valid type'})
    return
  }

  const mealRes = await generateSaveFood(req.body)

  return res.json({mealRes})
}

export {
  registerFood
}
