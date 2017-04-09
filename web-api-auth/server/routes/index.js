let routes = require('express').Router()
let user = require('../controllers/userController')

routes.get('/', user.getUser)

routes.post('/', user.createUser)

module.exports = routes;
