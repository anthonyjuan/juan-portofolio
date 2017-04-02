const Event = require('../models/event')


let addEvent = (req ,res) => {
  let newEvent = new Event({
    name: req.body.name,
    date: req.body.date,
    email: req.body.email
  })

  newEvent.save((err) => {
    if(err) {
      if(err.errors) {
        res.render('index', {error: err,success:""});
      } else {
        res.render('index',{error:"That event is already exist",success:""})
      }

    } else {
      res.render('index', {error:"", success: 'Input data success'})
    }
  })
}

let getEvent = (req ,res) => {

  Event.find({},(err,results) => {
    if(err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}

module.exports = {addEvent,getEvent};
