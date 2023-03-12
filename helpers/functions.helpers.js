const validateType = (type, arrayType) => {
  let value = false 
  arrayType.forEach( arrayElements => {
    if(arrayElements === type) {
      value = true
    }
  })
  return value
}

//TODO: add condition for evaluate meal and type
const searchByType = (type, arrayFood) => {
  let arraySelection = []
  arrayFood.forEach( arrayElements => {
    if(arrayElements.type === type) {
      arraySelection.push(arrayElements)
    }
  })
  return arraySelection
}

const verifyStock = (meal) => {
  console.log(meal)
  let resp = {}
  if(meal.stock > 0) {
    return resp = {
      meal
    }
  }
  return resp = {
    msg: 'El producto seleccionado se quedo sin stock, lo pondremos en una futura lista de compras',
    meal
  }
}

const takeAllMealsByStock = (meals, filter) => {
  let mealsStock = []
  //TODO: evaluate filter.stock == stock 
  if(true) {
    const mealsStock = []
    meals.forEach(element => {
      if(element.stock <= 0) {
        mealsStock.push(element)
      }
      console.log({ mealsStock })
      return mealsStock
    })
    return mealsStock
  }
}

export {
  validateType,
  searchByType,
  verifyStock,
  takeAllMealsByStock
}
