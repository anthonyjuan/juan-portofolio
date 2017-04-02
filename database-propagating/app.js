const express = require('express');
const app = express();
const index = require('./routes/index')
const bodyParser = require('body-parser')
const monggo = require('mongoose');
const path = require('path');

//view
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//middleware untuk parsing data form
app.use(bodyParser.urlencoded({extended:true}));

//set directory for assets
app.use(express.static(path.join(__dirname, 'assets')));

app.use('/',index);
monggo.Promise = global.Promise;
monggo.connect('mongodb://localhost/eventorganizer');
monggo.connection.on('connected', () => {
  console.log('mongoDB Connected...');
})


app.listen(3000, () => {
  console.log('Server is Running...');
})
