'use strict';

const Express = require('express');
const Server = Express();
const Path = require('path');
const Controller = require('./controller');
const BodyParser = require('body-parser');


// Server.use(Express.static(Path.join(__dirname + '/assets')));

Server.use(BodyParser.urlencoded({
  extended: true,
  parameterLimit: 10000,
  limit: 1024 * 1024 * 10
}));

// Server.get('/', function(req, res){
//   res.sendFile(Path.join(__dirname + '/index.html'));
// });

Server.post('/api/algos', function(req, res){
  console.log(req);
  console.log(req.body);
  console.log(req.json);
  console.log(req.data);
  console.log(req.headers);
  let data = Controller.receiveCode(req.body);
  console.log(data);
  res.send(data);
});

// FOR LIVE SERVER
// Server.listen(process.env.PORT, function(){
//   console.log('Server Running');
// });


// FOR DEV SERVER
Server.listen(8001, function(){
  console.log('Server Running');
});
