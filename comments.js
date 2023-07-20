// Create web server
// To run: node comments.js
// To test: curl -X GET http://localhost:3000/comments
// To test: curl -X GET http://localhost:3000/comments/1
// To test: curl -X POST http://localhost:3000/comments -d "text=Hello World"
// To test: curl -X PUT http://localhost:3000/comments/1 -d "text=Hello World"
// To test: curl -X DELETE http://localhost:3000/comments/1

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var comments = [
	{text: 'Comment 1'},
	{text: 'Comment 2'},
	{text: 'Comment 3'}
];

app.get('/comments', function(req, res) {
	console.log("GET");
	res.json(comments);
});

app.get('/comments/:id', function(req, res) {
	console.log("GET");
	res.json(comments[req.params.id]);
});

app.post('/comments', function(req, res) {
	console.log("POST");
	comments.push(req.body);
	res.json(comments);
});

app.put('/comments/:id', function(req, res) {
	console.log("PUT");
	comments[req.params.id] = req.body;
	res.json(comments);
});

app.delete('/comments/:id', function(req, res) {
	console.log("DELETE");
	comments.splice(req.params.id, 1);
	res.json(comments);
});

app.listen(3000);
console.log('Server running at http://localhost:3000/');