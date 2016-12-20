var express = require('express');
var request = require('request');

var app = express();

var port = 5000;
 
app.use(express.static('public'));



    
	/*
		
		HOMEWORK

		1) Create a new route that returns a static quote, inside it:
		2) Load quotes from quotes.json
		3) Select a RANDOM quote
		4) Return the result
		5) Update the client side javascript to get the static quote

	*/



app.get('/dynamicQuote', function(req, res) {
    
	console.log('Getting dynamic quote..');

	var options = {
		url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
		json: true
	};

	request(options, function (error, response, body) {
	  if (!error && response.statusCode == 200) {

	  		console.log(body[0]);

	  		var quote = {
	  			author: body[0].title,
	  			content: body[0].content
	  		};

	    	res.status(200).json(quote);
	  } else {
	  	res.status(500).json(error);
	  }
	});

});

app.listen(port, function(err){
    console.log('running server on port ' + port);
});
