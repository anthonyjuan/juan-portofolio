let monggo = require('mongoose');
let Schema = monggo.Schema;

let userSchema = new Schema({
  email: String,
  password: String
})

let User = monggo.model('User', userSchema)

module.exports = User;
