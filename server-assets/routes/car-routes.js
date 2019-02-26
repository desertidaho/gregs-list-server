const router = require('express').Router()
let Car = require('../models/Car')


//logger for car-routes
router.use('*', (req, res, next) => {
  console.log('Someone is in car-routes')
  next()
})

//get all
router.get('', (req, res, next) => {
  Car.find({})
    .then(cars => {
      res.status(200).send(cars)
    })
    .catch(err => {
      res.status(400).send({ Error: err })
    })
})

//get by Id
router.get('/:id', (req, res, next) => {
  Car.findById(req.params.id)
    .then(car => {
      if (car) {
        return res.status(200).send(car)
      }
      res.status(400).send('No car with that ID')
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//create a car
router.post('', (req, res, next) => {
  Car.create(req.body)
    .then(car => {
      res.status(201).send(car)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//update car data
router.put('/:id', (req, res, next) => {
  Car.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(car => {
      res.status(200).send(car)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//delete a car
router.delete('/:id', (req, res, next) => {
  Car.findOneAndDelete({ _id: req.params.id })
    .then(() => {
      res.status(200).send('Successfully deleted car')
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

module.exports = router