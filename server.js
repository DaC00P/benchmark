const Express = require('express');
const Server = Express();
const Path = require('path');
const Controller = require('./controller');
const BodyParser = require('body-parser');

Server.use(Express.static(Path.join(__dirname + '/assets')));
Server.use(BodyParser.urlencoded());

Server.get('/', function(req, res){
  res.sendFile(Path.join(__dirname + '/index.html'));
});

Server.post('/api/algos', function(req, res){
  // res.sendFile(Path.join(__dirname + '/index.html'));
  Controller.receiveCode(req.body);
});


Server.listen(8000, function(){
  console.log('Server Running');
});
