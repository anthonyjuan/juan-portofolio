let express = require('express');
let index = require('./routes/index');
let bodyPars = require('body-parser');
let passport = require('passport');
let passportLocal = require('passport-local');
let monggo = require('mongoose');
let Strategy = passportLocal.Strategy;

let app = express();

app.use(bodyPars.json());
app.use(bodyPars.urlencoded({extended:false}));

app.use('/',index);

monggo.connect('mongodb://localhost/userauth')
monggo.connection.on('connected', function() {
  console.log('Mongo is running...');
})
app.listen(3000, function() {
  console.log('Express is running...');
})
