'use strict'
var express = require('express');
var app = express(); 

app.get('/', function(req, res){
	res.send('Hello World');
});
app.use('/index', express.static(__dirname + '/public/index.html'));

app.listen(5000, function(){
	console.log('Example listening on port 5000');
});