var express = require('express');
var app = express();

app.get(
  '/name?first=karthik&last=vellur', (req, res) => {
    res.send({echo: req.params.word})
  }
)
































 module.exports = app;
