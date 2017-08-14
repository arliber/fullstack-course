var express = require('express');
var bodyParser = require('body-parser');
var usersController = require('./users.controller');
var expressJwt = require('express-jwt');

var app = express();

// This is required to transform the data from the browser (from the form) into JSON
app.use(bodyParser.urlencoded({ 
  extended: true
}));

var jwtMiddleware = expressJwt({
  secret: 'myTopSecret',
});

// Define routes
app.post('/api/signup', usersController.signup);
app.post('/api/signin', usersController.signin);

app.get('/api/publicResult', function(req, res) {
  res.send('this content is public');
});
app.get('/api/secretResult', jwtMiddleware, function(req, res) {
  res.send('Hello ' + req.user.email +'! This content is secret');
});

// It is important to have that after all other routes!
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('invalid token');
  }
});

// Start server
app.listen(5000, function(err){ //Start the server on port 5000
    //This code is exectued when server it up and running. We just print a message
    console.log('running server on port 5000');
});
