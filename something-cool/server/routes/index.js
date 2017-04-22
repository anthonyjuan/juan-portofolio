let routes = require('express').Router()
let user = require('../controllers/userControls')

routes.post('/login', user.login)

routes.post('/signup', user.createUser)

module.exports = routes;