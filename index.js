let express = require('express')
let bp = require('body-parser')
let server = express()
let port = 3000


//initialize connection to database
require('./server-assets/database/gearhost-config')

//middlewear
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))

//routes
let houseRoutes = require('./server-assets/routes/house-routes')
server.use('/api/drinks', houseRoutes)

//default
server.use('*', (req, res, next) => {
  res.status(404).send('No Routes Matching That Request')
})

//start server
server.listen(port, () => {
  console.log('Server Running on Port:', port)
})

