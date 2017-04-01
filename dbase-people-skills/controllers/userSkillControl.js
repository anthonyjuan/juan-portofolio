const skillUser = require('../models/userSkill')

let getSkillUser = (req, res) => {
  skillUser.find()
           .populate('user','name')
           .populate('skillList','point')
           .exec((err, results) => {
             if (err) {
               res.send(err.message);
             } else {
               res.send(results);
             }
           })
}

let createSkillUser = (req, res) => {
  skillUser.findOne({user:req.body.user},(err, result) => {
    if(err) {
      res.send(err);
    } else {
      if(result) {
        skillUser.update({_id: result._id}, {})
      } else {

      }
    }
  })
}
