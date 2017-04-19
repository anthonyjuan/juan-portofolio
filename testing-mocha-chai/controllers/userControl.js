const User = require('../models/user');


let getUser = (req, res) => {
  User.find({}, (err,results) => {
    if(err) {
      res.send({success:false, data:err.message});
    } else {
      res.send({success:true, data:results});
    }
  })
}

let createUser = (req, res) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })

  newUser.save((err,result) => {
    if(err) {
      res.send({success:false, data:err.message})
    } else {
      res.send({success:true, data:result})
    }
  })
}

let deleteUser = (req, res) => {
  User.findByIdAndRemove(req.params.id,(err) => {
    if(err) {
      res.send({success:false, data:err.message})
    } else {
      res.send({success:true, msg:'Data deleted'})
    }
  })
}

let updateUser = (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    {
      name     : req.body.name,
      email    : req.body.email,
      password : req.body.password
    },
    (err) => {
    if(err) {
      res.send({success:false, data:err.message})
    } else {
      res.send({success:true, msg:'Data updated'})
    }
  })
}

module.exports = {getUser,createUser,deleteUser};
