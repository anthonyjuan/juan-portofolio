const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const index = require('./routes/index');
const monggo = require('mongoose');

app.use(bodyParser.urlencoded({extended:true}));

app.use('/',index);
monggo.Promise = global.Promise;
monggo.connect('mongodb://localhost/skill_user');
monggo.connection.on('connected', () => {
  console.log('mongoDB Connected...');
})



app.listen(3000, () => {
  console.log('Server is running...');
})
