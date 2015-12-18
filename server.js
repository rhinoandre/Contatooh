var http = require('http');
var express = require('express');
var app = require('./configs/express')();
require('./configs/passport')();
require('./configs/database.js')('mongodb://localhost/contatooh');

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express Server escutando na porta ' + app.get('port'));
});
