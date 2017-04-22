let routes = require('express').Router()
let user = require('../controllers/userControls')
let auth = require('../helpers/authJwt')

routes.get('/', user.getUser)

routes.put('/follow', auth.verify, user.followUser)

routes.put('/unfollow', auth.verify, user.unfollowUser)

routes.get('/:id', auth.verify, user.getUserFollowingPost)

module.exports = routes;