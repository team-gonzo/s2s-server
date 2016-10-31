var express = require('express');

var app = express();

app.get('/', function (req, res) {
	res.status(200).send('ok');
});
var server = app.listen(4242, function () {
	var port = server.address().port;
	console.log('Server listening at port %s', port);
});

module.exports = server;