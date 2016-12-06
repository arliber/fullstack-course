var express = require('express');

var app = express();

var port = 5000;
 
app.use(express.static('public'));


app.get('/', function(req, res){
    res.send('Hello World');
});

app.get('/arik', function(req, res){
    res.json({firstName:'Arik', lastName: 'Liber', title:'Fullstack developer'});
});

app.listen(port, function(err){
    console.log('running server on port ' + port);
});