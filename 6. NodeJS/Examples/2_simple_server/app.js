var express = require('express');

var app = express();

var port = 5000;
 
app.use(express.static('public'));


app.get('/', function(req, res){
    res.send('Hello World');
});

app.get('/arik', function(req, res){
    res.json({
    	basicInfo: {
    		firstName:'Arik', lastName: 'Liber', title:'Fullstack developer'
    	},
    	socialNetworks: [
	        {
	            name: 'Facebook',
	            link: '#',
	            'iconName': 'facebook'
	        },
	        {
	            name: 'Linkedin',
	            link: '#',
	            'iconName': 'linkedin'
	        },
	        {
	            name: 'Medium',
	            link: '#',
	            'iconName': 'medium'
	        },
	        {
	            name: 'Email',
	            link: '#',
	            'iconName': 'envelope'
	        },
	        {
	            name: 'Website',
	            link: '#',
	            'iconName': 'globe'
	        }
		]
    });
});

app.listen(port, function(err){
    console.log('running server on port ' + port);
});