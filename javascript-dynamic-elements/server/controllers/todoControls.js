let Todo = require('../models/todo')

module.exports = {
  createTodo: (req, res) => {
    let newTodo = new Todo({
      name: req.body.name,
      status: false
    })

    newTodo.save((err,result) => {
      if(err) {
        res.send(err)
      } else {
        res.send(result)
      }
    })

  },
  getTodo: (req, res) => {
    Todo.find((err,results) => {
      if(err) {
        res.send(err)
      } else {
        res.send(results)
      }
    })
  },
  completeTodo: (req, res) => {
    Todo.update({_id: req.params.id},{status: true},
      (err) => {
        if(err) {
          res.send(err)
        } else {
          res.send('sukses')
        }
    })
  },
  deleteTodo: (req, res) => {
    Todo.remove({_id: req.params.id}, (err) => {
      if(err) {
        res.send(err)
      } else {
        res.send('sukses')
      }
    })
  }

};
