let routes = require('express').Router()
let user = require('../controllers/userControl')

routes.get('/',(req, res) => {
  res.send('whats up')
})

routes.get('/users', user.getUser);

routes.post('/users', user.createUser);

routes.delete('/users/:id', user.deleteUser);

module.exports = routes;