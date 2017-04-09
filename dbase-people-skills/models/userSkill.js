const monggo = require('mongoose');
const Schema = monggo.Schema;

const userSkillSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  skillList: [
    {
      skill:{
        type: Schema.Types.ObjectId,
        ref: 'Skill'
      },
      point: Number
    }
  ]

})

const UserSkill = monggo.model('UserSkill',userSkillSchema);

module.exports = UserSkill;
