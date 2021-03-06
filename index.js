const express = require('express');
const app = express();
const router = require("./routes/index") ;
const PORT = process.env['PORT'] || 4000 ;
const bodyParser = require ("body-parser");



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  console.log('Received request at time: '+Date().toString() )
  next()
})
app.use('/public', express.static('public'));
app.use('/',router);



app.listen(PORT);