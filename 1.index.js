/*
var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(request, response){
	response.send('<h1>Hello World</h1>')
});

http.listen(5000, function(){
	console.log('listening on *:5000')
});
*/

//accessing express module
var app = require('express')();

//Using http - module that is innate to Node.js
//('http')
//('fs')
var http = require('http').Server(app);

//first argument is path
//second argument is callback
app.get('/', function(req, res){
	res.sendFile(__dirname + '/1.ajax_example.html');

});


//listens to port # selected
http.listen(process.env.PORT || 5000, function(){
	console.log('listening on *:5000');
});