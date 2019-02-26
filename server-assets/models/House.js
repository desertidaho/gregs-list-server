let mongoose = require('mongoose')
let Schema = mongoose.Schema

//define schema
let house = new Schema({
  year: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  levels: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true }
})

//export schema
module.exports = mongoose.model('House', house)