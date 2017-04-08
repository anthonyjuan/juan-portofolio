let routes = require('express').Router();
let user = require('../controllers/todoControls')

routes.get('/', user.getTodo)
routes.post('/', user.createTodo)
routes.put('/:id', user.completeTodo)
routes.delete('/:id', user.deleteTodo)


module.exports = routes;
