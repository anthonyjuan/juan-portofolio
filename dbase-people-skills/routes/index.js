const routes = require('express').Router();
const user = require('../controllers/userControl');
const skill = require('../controllers/skillControl');

//get data
routes.get('/', (req, res) => {
  res.send('WDDDAAAAP');
})
routes.get('/users', user.getUser);
routes.get('/skills', skill.getSkill);


//seed data
routes.get('/users/seed-user', user.seedDataUser);
routes.get('/skills/seed-skill', skill.seedDataSkill);


//create data
routes.post('/users', user.createUser);

module.exports = routes;
