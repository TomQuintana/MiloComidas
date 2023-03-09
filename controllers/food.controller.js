
const registerFood = (req, res) => {
  console.log('Desde registerFood')
  return res.json({
    msg: 'Desde register food'
  })
}

export {
  registerFood
}
