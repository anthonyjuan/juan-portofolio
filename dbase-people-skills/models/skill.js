const monggo = require('mongoose');
const Schema = monggo.Schema;

const skillSchema = new Schema({
  name: {type: String, unique: true}
})

const Skill = monggo.model('Skill',skillSchema);

module.exports = Skill;
