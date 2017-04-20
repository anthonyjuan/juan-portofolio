let express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    index = require('./routes/index'),
    app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

app.use('/',index)

app.listen(3000, () => {
  console.log('Express running');
})

