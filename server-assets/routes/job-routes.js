const router = require('express').Router()
let Job = require('../models/Job')


//logger for job-routes
router.use('*', (req, res, next) => {
  console.log('Someone is in job-routes')
  next()
})

//get all
router.get('', (req, res, next) => {
  Job.find({})
    .then(jobs => {
      res.status(200).send(jobs)
    })
    .catch(err => {
      res.status(400).send({ Error: err })
    })
})

//get by Id
router.get('/:id', (req, res, next) => {
  Job.findById(req.params.id)
    .then(job => {
      if (job) {
        return res.status(200).send(job)
      }
      res.status(400).send('No job with that ID')
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//create a car
router.post('', (req, res, next) => {
  Job.create(req.body)
    .then(job => {
      res.status(201).send(job)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//update job data
router.put('/:id', (req, res, next) => {
  Job.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(job => {
      res.status(200).send(job)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//delete a car
router.delete('/:id', (req, res, next) => {
  Job.findOneAndDelete({ _id: req.params.id })
    .then(() => {
      res.status(200).send('Successfully deleted job')
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

module.exports = router