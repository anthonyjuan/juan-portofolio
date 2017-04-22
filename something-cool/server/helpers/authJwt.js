let jwt = require('jsonwebtoken')
let user = require('../models/user')

require('dotenv').config()

module.exports = {
  verify: (req, res, next) => {
    jwt.verify(req.headers.token, process.env.SECRET, function(err, decoded) {
      if(decoded) {
        user.findOne({username:decoded.username}, function(err,result) {
          if(err || result == null) {
            res.send({success:false , msg:'failed to connect', result:err})
          } else {
            next()
          }
        })
      } else {
        res.send(err)
      }
    })
  }
};