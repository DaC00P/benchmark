const Express = require('express');
const Server = Express();
const Path = require('path');

Server.use(Express.static(Path.join(__dirname + '/assets')));

Server.get('/', function(req, res){
  res.sendFile(Path.join(__dirname + '/index.html'));
});

Server.use('/assets/bundle.js', function(req, res){
  res.setHeader('content-type', 'application/javascript');
});

Server.listen(8000, function(){
  console.log('Server Running');
});
