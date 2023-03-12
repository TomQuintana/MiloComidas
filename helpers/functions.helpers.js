const validateType = (type, arrayType) => {
  let value = false 
  arrayType.forEach( arrayElements => {
    if(arrayElements === type) {
      value = true
    }
  })
  return value
}

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


export {
  validateType,
  searchByType,
  verifyStock
}
