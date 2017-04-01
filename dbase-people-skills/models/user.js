const monggo = require('mongoose');
const Schema = monggo.Schema;

const userSchema = new Schema({
  name: {type: String, unique: true},
  phone: String
})

const User = monggo.model('User',userSchema);

module.exports = User;
