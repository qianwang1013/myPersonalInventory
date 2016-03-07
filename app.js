'use strict'
var express = require('express'),
	app = express(),
	http = require('http'),
	fs = require('fs');

app.use('/', express.static(__dirname + '/public'));

app.listen(5000, function(){
	console.log('Example listening on port 5000');
});
