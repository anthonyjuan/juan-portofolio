const Skill = require('../models/skill')
const skillJson = require('../seeders/skill.json')

let seedDataSkill = (req, res) => {
  Skill.collection.insert(skillJson, (err,results) => {
    if(err) {
      res.send(err);
    } else {
      res.send(results)
    }
  })
}

let getSkill = (req, res) => {
  Skill.find({}, (err, results) => {
    if(err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}

let createSkill = (req, res) => {
  let newSkill = new Skill({
    name: req.body.name
  })

  newSkill.save((err,result) => {
    if(err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

module.exports = {seedDataSkill,createSkill,getSkill};
