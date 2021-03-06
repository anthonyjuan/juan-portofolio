let mongoose = require('mongoose')
let Schema = mongoose.Schema;


let userSchema = new Schema({
  name: String,
  email: String,
  username: {type: String, unique:true ,require:true},
  password: String,
  avatar: {type:String, default:'http://i.imgur.com/eDZnuoM.jpg'},
  following: [{type: Schema.Types.ObjectId, ref:'User'}],
  followers: [{type: Schema.Types.ObjectId, ref:'User'}]
})

let User = mongoose.model('User',userSchema)

module.exports = User;