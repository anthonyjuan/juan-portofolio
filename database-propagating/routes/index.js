const routes = require('express').Router();
const event = require('../controllers/eventControls');

//get event
routes.get('/events', (req, res) => {
  res.render('index',{error:"",success:""});
})
routes.get('/', event.getEvent);


//create event
routes.post('/events', event.addEvent);


module.exports = routes;
