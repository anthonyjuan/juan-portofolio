let routes = require('express').Router()
let user = require('../controllers/userControls')

routes.get('/', user.getUser)

module.exports = routes;