let routes = require('express').Router()
let user = require('../controllers/userControls')
routes.get('/login', user.login)

module.exports = routes;