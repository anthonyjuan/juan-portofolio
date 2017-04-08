let monggo = require('mongoose');
let Schema = monggo.Schema;

let todoSchema = new Schema({
  name: String,
  status: Boolean
})

let Todo = monggo.model('Todo', todoSchema);

module.exports = Todo;
