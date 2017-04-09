let routes = require('express').Router();
let memo = require('../controllers/memoController')

routes.get('/', memo.getMemo);

//post a memo
routes.post('/', memo.createMemo);

//delete a memo
routes.delete('/:id', memo.deleteMemo);

//update a memo
routes.put('/:id', memo.updateMemo);

module.exports = routes;