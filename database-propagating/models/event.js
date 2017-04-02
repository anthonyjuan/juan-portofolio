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
    required: [true, 'email can not be empty']
  }
})

const Event = monggo.model('Event',eventSchema);

module.exports = Event;
