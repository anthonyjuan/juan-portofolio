const skillUser = require('../models/userSkill')

let getSkillUser = (req, res) => {
  skillUser.find()
           .populate('user','name')
           .populate('skillList.skill','name')
           .exec((err, results) => {
             if (err) {
               res.send(err.message);
             } else {
               res.send(results);
             }
           })
}

let deleteSkillUser = (req, res) => {
  skillUser.findByIdAndRemove(req.params.id, (err) => {
      if(err) {
        res.send(err)
      } else {
        res.send('data has been deleted');
      }
  })
}

let createSkillUser = (req, res) => {
  //check if user already exist
  skillUser.findOne({user:req.body.user},(err, result) => {
    if(err) {
      res.send(err);
    } else {
      if(result) {

        //check if skill already exist
        let counter = 0;
        result.skillList.forEach((skillOne) => {
          if(skillOne.skill == req.body.skill) {
            counter +=1;
          }
        })

        if(counter > 0) {
          res.send('user already has that skill !');
        } else {
          skillUser.update({_id: result._id},{
            $push: {
              skillList: {skill:req.body.skill,point:req.body.point}
            }
          },{
            safe:true,
            upsert:true,
            new:true
          },(err) => {
            if(err) {
              res.send(err);
            } else {
              res.send('data updated!')
            }
          })
        }
      } else {
        let newSkillUser = new skillUser({
          user: req.body.user,
          skillList: [{skill:req.body.skill,point:req.body.point}]
        })

        newSkillUser.save((err) => {
          if(err) {
            res.send(err);
          } else {
            res.send('data has been created')
          }
        })
      }
    }
  })
}

module.exports = {getSkillUser,createSkillUser,deleteSkillUser};
