let express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    index = require('./routes/index'),
    user = require('./routes/user'),
    app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

mongoose.connect('mongodb://localhost/dayins')
mongoose.connection.on('connected', () => {
  console.log('mongo is connected');
})

app.use('/api',index)
app.use('/api/user',user)
app.listen(3000, () => {
  console.log('Express is running');
})


