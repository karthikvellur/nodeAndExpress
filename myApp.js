var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(
  (req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
  }
);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
})

// app.get("/json", (req, res) => {
//   res.json({"message": "Hello json"});
//   // console.log({message: "Hello json"});
// });

// process.env.MESSAGE_STYLE="uppercase"
// app.get("/json", (req, res) => {
//   if(process.env.MESSAGE_STYLE === 'uppercase')
//     res.json({"message": "HELLO JSON"})
//   else
//     res.json({"message": "Hello json"})
// })































 module.exports = app;
