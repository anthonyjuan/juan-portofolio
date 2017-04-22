let Post = require('../models/post')

module.exports = {
  createPost: (req, res) => {
    let newPost = new Post({
      user: req.body.user,
      image: req.body.image,
      caption: req.body.caption
    })

    newPost.save(function(err, newuser) {
      if(!err) {
        res.send({success:true, msg:"create post succes", result:newuser})
      } else {
        res.send({success:false, msg:"failed", result:err})
      }
    })

  },
  getAllPost: (req, res) => {
    Post.find(function(err, posts) {
      if(!err) {
        res.send({success:true, result:posts})
      } else {
        res.send({success: false, result:err})
      }
    })
  }
};