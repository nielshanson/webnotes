
var _ = require('underscore');
var m2 = require('./module2');
var http = require('http');
m2();

var server = http.createServer(function(request, response)) {
  console.log('got a request');
  response.write('hi');
});

server.listen(3000);

// console.log(_);
