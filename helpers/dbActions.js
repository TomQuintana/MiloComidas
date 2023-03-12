import foodInformation from '../models/FoodCuantity.js'

const generateSaveFood = async(mealInformation) => {
  try {
    const meal = new foodInformation(mealInformation)
    const mealSave = await meal.save()

    return mealSave
  } catch (error) {
    console.log(error)
  }
}

const getFood = async () => {
  try {
    const mealAlls = await foodInformation.find({})
    return mealAlls
  } catch (error) {
    console.log(error)
  }
}

export {
  generateSaveFood,
  getFood 
}
