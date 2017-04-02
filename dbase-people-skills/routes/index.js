const routes = require('express').Router();
const user = require('../controllers/userControl');
const skill = require('../controllers/skillControl');
const skillUser = require('../controllers/userSkillControl');

//get data
routes.get('/', (req, res) => {
  res.send('WDDDAAAAP');
})
routes.get('/users', user.getUser);
routes.get('/skills', skill.getSkill);
routes.get('/userskills', skillUser.getSkillUser);


//seed data
routes.get('/users/seed-user', user.seedDataUser);
routes.get('/skills/seed-skill', skill.seedDataSkill);


//create data
routes.post('/users', user.createUser);
routes.post('/userskills', skillUser.createSkillUser)


//delete data
routes.delete('/userskills/:id', skillUser.deleteSkillUser)

module.exports = routes;
