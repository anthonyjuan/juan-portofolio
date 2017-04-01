const User = require('../models/user');
const userJson = require('../seeders/user.json');

let seedDataUser = (req, res) => {
  User.collection.insert(userJson, (err, results) => {
    if(err) {
      res.send(err);
    } else {
      res.send(results)
    }
  })
}

let getUser = (req, res) => {
  User.find({}, (err,results) => {
    if(err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}

let createUser = (req, res) => {
  let newUser = new User({
    name: req.body.name,
    phone: req.body.phone
  })

  newUser.save((err,result) => {
    if(err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
}

module.exports = {seedDataUser,getUser,createUser};
