var express = require('express');
var app = express();

app.get("/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({time: req.time});
  }
);
































 module.exports = app;
