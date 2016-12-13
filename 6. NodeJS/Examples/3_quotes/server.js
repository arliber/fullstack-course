var express = require('express');
var request = require('request');

var app = express();

var port = 5000;
 
app.use(express.static('public'));


app.get('/staticQuote', function(req, res) {
    
	console.log('Getting static quote..');

	var quotes = require('./quotes.json').quotes;
	var randomIndex = getRandomInt(0, quotes.length);

	var returnedQuote = quotes[randomIndex];
	returnedQuote.content = '<p>' + returnedQuote.content + '</p>';

	res.status(200).json(returnedQuote);

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