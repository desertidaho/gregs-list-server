let mongoose = require('mongoose')
let Schema = mongoose.Schema

//define schema
let car = new Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: false },
  imgUrl: { type: String, required: true }
})

//export schema
module.exports = mongoose.model('Car', car)
