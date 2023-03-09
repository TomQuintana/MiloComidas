import express from 'express'
import dotenv from 'dotenv'

const app = express()

app.listen(4000, () => {
  console.log('Servidor corriendo en el puerto 4000')
})
