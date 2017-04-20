let routes = require('express').Router()

routes.get('/index', (req, res) => {
  res.json({data:['mangga','kelapa','jeruk','apel','salak']})
})

module.exports = routes;