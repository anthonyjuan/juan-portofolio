let express = require('express'),
    bodyPars = require('body-parser'),
    configDB = require('./config/configDB'),
    monggo = require('mongoose'),
    morgan = require('morgan'),
    index = require('./routes/index'),
    app = express()


app.use(morgan('dev'))
app.use(bodyPars.json())
app.use(bodyPars.urlencoded({extended:false}))

monggo.connect(configDB.mongoURL[app.settings.env],(err,res) => {
  if(err) {
    console.log('Error connecting to the database. ' + err);
  } else {
    console.log('Using Database: ' + configDB.mongoURL[app.settings.env]);
  }
})

app.use('/',index);

app.listen(3000, () => {
  console.log('Server is running');
})

