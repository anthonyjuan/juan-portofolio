let User = require('../models/user')
let pwh = require('password-hash')

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
