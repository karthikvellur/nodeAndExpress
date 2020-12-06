var express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.get(
  '/:word/echo', (req, res) => {
    res.send({echo: req.params.word})
  }
)

app.get(
  '/name', (req, res) => {
    res.send({name: `${req.query.first} ${req.query.last}`})
  }
)

app.use(bodyParser.urlencoded({extended: false}));
































 module.exports = app;
