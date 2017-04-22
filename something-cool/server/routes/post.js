let routes = require('express').Router()
let post = require('../controllers/postControls')
let auth = require('../helpers/authJwt')

routes.get('/', post.getAllPost)

routes.post('/',auth.verify, post.createPost)

module.exports = routes;