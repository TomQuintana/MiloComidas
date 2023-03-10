import mongoose from 'mongoose'

const foodInformationSchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: String,
    required: true,
    trim: true
  },
  stock: {
    type: Number,
    required: true,
  },
  meal: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
  }
})

const foodInformation = mongoose.model('foodInformation', foodInformationSchema)

export default foodInformation
