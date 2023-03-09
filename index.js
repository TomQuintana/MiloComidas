import express from 'express'
import dotenv from 'dotenv'
import conectarDB from './config/db.js'
import routerFood from './routes/food.routes.js'

const app = express()

app.use(express.json())

dotenv.config()

conectarDB()

app.use('/api/food', routerFood)

app.listen(4000, () => {
  console.log('Servidor corriendo en el puerto 4000')
})
