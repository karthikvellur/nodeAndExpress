var express = require('express');
var app = express();
const bodyParser = require('body-parser');

// Serve Static Assets : https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/serve-static-assets
app.use(express.static(__dirname + '/public'));

// Serve an HTML File : https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/serve-an-html-file
app.get('/html', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Serve JSON for specific route -- https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/serve-json-on-a-specific-route
// Use .env file -- https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/use-the--env-file

// Root Level logger -- https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/implement-a-root-level-request-logger-middleware
app.use( (req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

// Chain Middleware to create timer -- https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/chain-middleware-to-create-a-time-server
app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.send({time: req.time});
});

// Path Params -- https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/get-route-parameter-input-from-the-client
app.get(
  '/:word/echo', (req, res) => {
    res.send({echo: req.params.word});
  }
);

// Query Params -- https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/get-query-parameter-input-from-the-client
app.get(
  '/name', (req, res) => {
    res.send({name: `${req.query.first} ${req.query.last}`})
  }
)

// Mounting bodyParser for parsing POST requests -- https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/use-body-parser-to-parse-post-requests
app.use(bodyParser.urlencoded({extended: false}));
































 module.exports = app;
