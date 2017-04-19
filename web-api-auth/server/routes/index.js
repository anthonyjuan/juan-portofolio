let routes = require('express').Router()
let user = require('../controllers/userController')
let auth = require('../helpers/authJwt')

routes.get('/', auth.verify, user.getUser)

routes.post('/', user.createUser)

routes.post('/login', user.login)
module.exports = routes;
