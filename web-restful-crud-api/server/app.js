let express = require('express');
let bodyPars = require('body-parser');
let index = require('./routes/index');
let cors = require('cors');
let app = express()

app.use(bodyPars.json())
app.use(bodyPars.urlencoded({extended: false}));
app.use(cors());

app.use('/',index)
app.listen(3000, () => {
  console.log('Express is running');
})

