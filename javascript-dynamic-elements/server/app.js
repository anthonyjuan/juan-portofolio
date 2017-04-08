let express = require('express');
let app = express();
let index = require('./routes/index')
let cors = require('cors');
let bodyParser = require('body-parser');
let monggo = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors())
app.use('/',index);

monggo.connect('mongodb://localhost/todolist')
monggo.connection.on('connected',() => {
  console.log('MongoDB Connected...');
})
app.listen(3000, () => {
  console.log('Express is running');
})
