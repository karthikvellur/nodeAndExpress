var express = require('express');
var app = express();

app.get(
  '/:word/echo', (req, res) => {
    res.send({echo: req.params.word})
  }
)
































 module.exports = app;
