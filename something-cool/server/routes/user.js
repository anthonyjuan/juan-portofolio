let routes = require('express').Router()
let user = require('../controllers/userControls')

routes.post('/', user.createUser)

routes.get('/', user.getUser)

module.exports = routes;