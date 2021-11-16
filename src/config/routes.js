const express = require('express')
const getResult = require('../controller/jokenpocontroller')
const routes = express.Router()

routes.get('/jokenpo', (req, res) => {
    getResult(req.query, (err, data) => {
      if(err) res.status(400).send(err);
      res.status(200).send(data)
    })
  }); 

module.exports = routes
