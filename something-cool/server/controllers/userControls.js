let User = require('../models/user')
let pwh = require('password-hash')
let jwt = require('jsonwebtoken')

require('dotenv').config()

module.exports = {
  createUser: (req, res) => {
    let newUser = new User({
      name: req.body.name,
      email: req.body.email,
      image: req.body.image,
      username: req.body.username,
      password: pwh.generate(req.body.password)
    })

    newUser.save((err,newUser) => {
      if(!err) {
        res.send({success:true, msg:'Success', result:newUser})
      } else {
        res.send({success:false, msg:err})
      }
    })
  },
  getUser: (req , res) => {
    User.find((err,users) => {
      if(!err) {
        res.send({success:true, msg:'Success', result:users})
      } else {
        res.send({success:false, msg:err})
      }
    })
  },
  login: (req, res) => {
    User.findOne({username: req.body.username}, function(err, user) {
      if(err || user == null) {
        res.send({success: false, msg:'User not found'})
      } else {
        if(pwh.verify( req.body.password,user.password)){
          let newToken = jwt.sign({username:user.username, id:user._id}, process.env.SECRET)
          res.send({success:true, msg:'login success', token: newToken})
        } else {
          res.send({success:false, msg:'wrong password'})
        }
      }
    })
  }
};