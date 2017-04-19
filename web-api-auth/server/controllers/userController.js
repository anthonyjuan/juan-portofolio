let User = require('../models/user')
let pwh = require('password-hash')
let jwt = require('jsonwebtoken')

module.exports = {
  createUser: function(req, res) {
    let newUser = new User({
      email: req.body.email,
      password: pwh.generate(req.body.password)
    })

    newUser.save(function(err, data) {
      if(err) {
        res.send(err)
      } else {
        res.send(data)
      }
    })
  },
  login: function(req, res) {
    User.findOne({'email':req.body.email}, function(err,user) {
      if(err || user == null ) {
        res.send({success:false, msg:'username not found'})
      } else {
        if(pwh.verify(req.body.password,user.password)) {
          let newToken = jwt.sign({email: user.email}, process.env.SECRET_KEY)
          res.send({success: true, msg:'login success', token: newToken, id: user._id})
        } else {
          res.send({success: false, msg:'Wrong Password'})
        }
      }
    })
  },
  getUser: function(req, res) {
    User.find(function(err,results) {
      if(err) {
        res.send(err)
      } else {
        res.send(results)
      }
    })
  }
};
