let User = require('../models/user')
let Post = require('../models/post')
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
        let newToken = jwt.sign({username:newUser.username, id:newUser._id}, process.env.SECRET)
        res.send({success:true, msg:'Success', result:newUser, token:newToken})
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
  getOneUser: (req , res) => {
    User.findOne({_id:req.params.id},(err,user) => {
      if(!err) {
        res.send({success:true, msg:'Success', result:user})
      } else {
        res.send({success:false, msg:err})
      }
    })
  },
  getUserFollowingPost: (req, res) => {
    User.findOne(
      {_id: req.params.id},
      function(err,user) {
        if(!err) {
          user.following.map((follow) => {
            Post.find({user: follow})
                .populate('user')
                .exec(function(err,posts) {
                  if(!err) {
                    res.send({success:true, result:posts})
                  } else {
                    res.send({success:false, result:err})
                  }
                })
          })
        } else {
          res.send({success:false, result:err})
        }
      }
    )
  },
  login: (req, res) => {
    User.findOne({username: req.body.username}, function(err, user) {
      if(err || user == null) {
        res.send({success: false, msg:'User not found'})
      } else {
        if(pwh.verify( req.body.password,user.password)){
          let newToken = jwt.sign({username:user.username, id:user._id}, process.env.SECRET)
          res.send({success:true, msg:'login success', token: newToken, result:user})
        } else {
          res.send({success:false, msg:err})
        }
      }
    })
  },
  getUserFollowing: (req, res) => {
    User.findOne({_id : req.params.id})
        .populate('following')
        .exec(function(err,user) {
          if(!err) {
            res.send({success:true, result:user})
          } else {
            res.send({success:false, result:err})
          }
        })
  },
  followUser: (req, res) => {
    User.update(
      {_id:req.body.userid},
      {
        $push : {
          following: req.body.targetid
        }
      },
      { "new": true, "upsert": true },
      function(err) {
        if(!err) {
          User.update(
            {_id:req.body.targetid},
            {
              $push : {
                followers: req.body.userid
              }
            },
            { "new": true, "upsert": true },
            function(err) {
              if(!err) {
                res.send({success:true, msg:'following success'})
              } else {
                res.send({success:false, msg:'following failed'})
              }
            })
        } else {
          res.send({success:false, msg:'following failed'})
        }
      })
  },
  unfollowUser: (req, res) => {
    User.update(
      {_id: req.body.userid},
      {
        $pullAll: {
          following: [req.body.targetid]
        }
      },
      function(err) {
        if(!err) {
          User.update(
            {_id: req.body.targetid},
            {
              $pullAll: {
                followers: [req.body.userid]
              }
            },
            function(err) {
              if(!err) {
                res.send({success:true, msg:'unfollowing success'})
              } else {
                res.send({success:false, msg:'unfollowing failed'})
              }
            }
          )
        } else {
          res.send({success:false, msg:'unfollowing failed'})
        }
      }
    )
  }
};