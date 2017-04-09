let routes = require('express').Router()
let color = require('../controllers/colorController')

routes.get('/color', color.randomColor)

module.exports = routes;
