let routes = require('express').Router()
let user = require('../controllers/userControls')
let auth = require('../helpers/authJwt')

routes.get('/', user.getUser)

routes.put('/follow', auth.verify, user.followUser)

routes.put('/unfollow', auth.verify, user.unfollowUser)

routes.get('/followingpost/:id', auth.verify, user.getUserFollowingPost)

routes.get('/:id', auth.verify, user.getOneUser)

module.exports = routes;