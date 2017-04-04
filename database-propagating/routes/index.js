const routes = require('express').Router();
const event = require('../controllers/eventControls');

//get event
routes.get('/events', (req, res) => {
  res.render('events/index',{error:"",success:""});
})
routes.get('/', event.getEvent);


//create event
routes.post('/events', event.addEvent);

//delete
routes.get('/events/:id', event.deleteEvent)


//edit
routes.get('/events/edit-event/:id', event.getDataEdit)
routes.post('/events/edit/:id', event.postDataEdit)


module.exports = routes;
