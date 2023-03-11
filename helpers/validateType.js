let value = false 
const validateType = (type, arrayType) => {
  arrayType.forEach( arrayElements => {
    if(arrayElements === type) {
      value = true
    }
  })
  return value
}

export default validateType
