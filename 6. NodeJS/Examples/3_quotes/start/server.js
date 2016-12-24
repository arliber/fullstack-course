var express = require('express');
var request = require('request'); //We load a new module called 'request' - it allows us to make requrest via HTTP to another server

var app = express();

var port = 5000;

app.use(express.static('public'));




	/*

		HOMEWORK

		1) Create a new route that returns a static quote, inside it:
		2) Load quotes from quotes.json (hint: You can use require() function)
		3) Select a RANDOM quote
		4) Return the result
		5) Update the client side javascript to get the static quote

	*/



app.get('/dynamicQuote', function(req, res) { //We create a new route called 'dynamicQuote'

	console.log('Getting dynamic quote..');

	var options = { //This is a simple object which holds some configuration for the request module we use below
		url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
		json: true
	};

	request(options, function (error, response, body) { //We noe make a request to another server. options contains all the configuration and the anonymousfunction is exectued one we get a response from the other server
	  if (!error && response.statusCode == 200) { //We check if there was an error or the response code is not 200

	  		console.log(body[0]); //The returned result is a JSON array, so we pring the first item

	  		var quote = { //We create our own response object
	  			author: body[0].title, //Extract the author of the quote from the response
	  			content: body[0].content //Extract the content of the quote from the response
	  		};

	    	res.status(200).json(quote); //We know return the result (quote) and set the return status to be 200 (which means 'success')
	  } else { //If we got an error or the response status from the remote server is not 200 - we return an error
	  	res.status(500).json(error); //Return a JSON of the error and set the http status to 500 which means 'error on the server'
	  }
	});

});

app.listen(port, function(err){ //Let's start the server now..
    console.log('running server on port ' + port);
});
