var express = require('express');
var request = require('request');

var app = express();

var port = 5000;

app.use(express.static('public'));




app.get('/staticQuote', function(req, res) { //This is the solution of the class work

	console.log('Getting static quote..');

	var quotes = require('./quotes.json').quotes; //We first load the "quotes.json" file. We reference the 'quotes' property of it.
	var randomIndex = getRandomInt(0, quotes.length); //We calculate a random index of the array

	var returnedQuote = quotes[randomIndex]; //We get the random quote, based on the random number
	returnedQuote.content = '<p>' + returnedQuote.content + '</p>'; //We wrap the quote itself with a <p> tag, so it looks better on the clinet

	res.status(200).json(returnedQuote); //We return our random quote along with a 200 HTTP status

});




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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
