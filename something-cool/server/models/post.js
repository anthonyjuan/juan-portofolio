let mongoose = require('mongoose')
let Schema = mongoose.Schema

let postSchema = new Schema({
  user:{type: Schema.Types.ObjectId , ref: 'User'},
  image: String,
  caption: String,
  createdAt: {type: Date, default: Date.now}
})

let Post = mongoose.model('Post', postSchema)

module.exports = Post;