var express = require('express'); //Load the web server module
var bodyParser = require('body-parser'); //NEW - we use body-parser to read submitted form data
var controller = require('./controller.js'); //Load the controller we wrote

var app = express(); //Create a new instance of the server

var port = 3000; //This is the port server - we'll use it later

app.use(express.static('public')); //Serve all the files under /public directly. This will return all the files under /public when you go to /.

app.use(bodyParser.urlencoded({ //This is required to transform the data from the browser (from the form) into JSON
  extended: true
}));

app.get('/user/:userName', function(req, res) { //:userName is a parameter and can be anything

    console.log('Request for user "' + req.params.userName + '"');
    controller.getUserByName(req.params.userName, res); //Pass the userName and the 'res' object so we can return a can send the data from the controller

});

app.get('/arik', function(req, res) { //Create a new route '/arik' and execute this code when someone goes to /arik
    //Old static route - acceeable from /user/arik from now on
});

app.get('/users', function(req, res) { //:userName is a parameter and can be anything

    console.log('Getting all users..');
    controller.getAllUserNames(res); //Pass the userName and the 'res' object so we can return a can send the data from the controller

});

app.post('/user', function(req, res) {

    console.log('Saving user..');
    controller.saveOrUpdateUser(req.body, res); //Save or update the user 

});

app.listen(port, function(err){ //Start the server on port 5000
    console.log('running server on port ' + port); //This code is exectued when server it up and running. We just print a message
});
