'use strict'

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('./../models')
const Event = db.Event

router.use(bodyParser.json({ extended: false }))

router.get('/', function (req, res) {
  console.log(11111111111111111)
  Event.findAll()
  .then(function (events) {
    console.log(22222222222222)
    return res.json(events)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

module.exports = router