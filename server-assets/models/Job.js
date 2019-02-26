let mongoose = require('mongoose')
let Schema = mongoose.Schema

//define schema
let job = new Schema({
  jobTitle: { type: String, required: true },
  company: { type: String, required: true },
  hours: { type: Number, required: true },
  rate: { type: Number, required: true },
  description: { type: String, required: false }
})

//export schema
module.exports = mongoose.model('Job', job)
