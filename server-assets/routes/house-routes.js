const router = require('express').Router()
let House = require('../models/House')


//logger for house-routes
router.use('*', (req, res, next) => {
  console.log('Someone is in house-routes')
  next()
})

//get all
router.get('', (req, res, next) => {
  House.find({})
    .then(houses => {
      res.status(200).send(houses)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//get by Id
router.get('/:id', (req, res, next) => {
  House.findById(req.params.id)
    .then(house => {
      if (house) {
        return res.status(200).send(house)
      }
      res.status(400).send('No house with that ID')
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//create a house
router.post('', (req, res, next) => {
  House.create(req.body)
    .then(house => {
      res.status(201).send(house)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//update house data
router.put('/:id', (req, res, next) => {
  House.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(house => {
      res.status(200).send(house)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//delete a house
router.delete('/:id', (req, res, next) => {
  House.findOneAndDelete({ _id: req.params.id })
    .then(() => {
      res.status(200).send('Successfully deleted house')
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

module.exports = router