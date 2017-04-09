let express = require('express');
let cors = require('cors');
let index = require('./routes/index');
let app = express();

app.use(cors());
app.use('/api',index);

app.listen(3000, () => {
  console.log('Express is running...');
})
