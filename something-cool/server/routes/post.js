let routes = require('express').Router()
let post = require('../controllers/postControls')
let auth = require('../helpers/authJwt')

routes.get('/', post.getAllPost)

routes.post('/',auth.verify, post.createPost)

routes.delete('/:id',auth.verify, post.deletePost)

module.exports = routes;