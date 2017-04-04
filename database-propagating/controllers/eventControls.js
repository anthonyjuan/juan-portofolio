const Event = require('../models/event')
const validate = require('../helpers/emailValidator');

let addEvent = (req ,res) => {

    let newEvent = new Event({
      name: req.body.name,
      date: req.body.date,
      email: req.body.email
    })

    newEvent.save((err) => {
      if(err) {
        if(err.errors) {
          res.render('events/index', {error: err,success:""});
        } else {
          res.render('events/index',{error:"That event is already exist",success:""})
        }

      } else {
        res.render('events/index', {error:"", success: 'Input data success'})
      }
    })



}

let getEvent = (req ,res) => {

  Event.find({},(err,results) => {
    if(err) {
      res.send(err);
    } else {
      res.render('index',{data:results});
    }
  })
}

let deleteEvent = (req, res) => {
  Event.findOneAndRemove({_id:req.params.id},(err) => {
    if(err) {
      res.send(err.message);
    } else {
      res.redirect('/')
    }
  })
}

let getDataEdit = (req ,res) => {
  Event.findOne({_id:req.params.id}, (err, result) => {
    if(err) {
      res.send(err)
    } else {
      res.render('events/edit-event', {dataevent:result});
    }
  })
}

let postDataEdit = (req ,res) => {
  Event.findOneAndUpdate({_id:req.params.id},{
      name: req.body.name,
      email: req.body.email,
      date: req.body.date
    },(err, result) => {
    if(err) {
      res.send(err)
    } else {
      res.redirect('/');
    }
  })
}

module.exports = {addEvent,getEvent,deleteEvent,getDataEdit,postDataEdit};
