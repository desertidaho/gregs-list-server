//THIS FILE IS PRETTY MUCH ALWAYS THE SAME
let mongoose = require('mongoose')

//CHANGES FROM PROJECT TO PROJECT
//mongodb://<Username>:<password>@<database server>/<server name>
const connectionString = 'mongodb://brettsgregslist:Qd3pn~_05181@den1.mongo1.gear.host:27001/brettsgregslist'

let connection = mongoose.connection

//establishes connection to database
mongoose.connect(connectionString, {
  useNewUrlParser: true
})

//console log errors
connection.on('error', err => {
  console.log('[DATABASE ERROR]: ', err)
})

//confirm connection
connection.once('open', () => {
  console.log('Successfully connected to database')
})