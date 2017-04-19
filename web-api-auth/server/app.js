let express = require('express');
let index = require('./routes/index');
let bodyPars = require('body-parser');
let cors = require('cors');
let monggo = require('mongoose');


let app = express();

app.use(bodyPars.json());
app.use(bodyPars.urlencoded({extended:false}));
app.use(cors())
app.use('/',index);

monggo.connect('mongodb://localhost/userauth')
monggo.connection.on('connected', function() {
  console.log('Mongo is running...');
})
app.listen(3000, function() {
  console.log('Express is running...');
})


