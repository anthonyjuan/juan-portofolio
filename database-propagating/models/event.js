const monggo = require('mongoose');
const Schema = monggo.Schema;

const eventSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Event name can not be empty'],
    unique: true
  },
  date: {
    type: Date,
    required: [true, 'date can not be empty']
  },
  email: {
    type: String,
    validate: {
      validator: function(params) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(params);
      },
      message: 'not a valid email'
    },
    required: [true, 'email can not be empty']

  }
})

const Event = monggo.model('Event',eventSchema);

module.exports = Event;
