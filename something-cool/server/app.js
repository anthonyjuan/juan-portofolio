let express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    index = require('./routes/index'),
    user = require('./routes/user'),
    post = require('./routes/post'),
    cors = require('cors'),
    app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dayins')
mongoose.connection.on('connected', () => {
  console.log('mongo is connected');
})

app.use('/api',index)
app.use('/api/user',user)
app.use('/api/post',post)
app.listen(3000, () => {
  console.log('Express is running');
})


