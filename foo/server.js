var http = require('http');
var fs = require('fs');
var path = require('path');
var server = http.createServer(onrequest);

function onrequest (req, res) {
  console.log('%s %s', req.method, req.url);
  if ('/' == req.url) {
    req.url = '/index.html';
  } else if ('/favicon.ico' == req.url) {
    res.statusCode = 404;
    return res.end();
  }

  fs.createReadStream(path.join(__dirname, req.url))
  .on('error', function (e) {
    console.error(e);
    res.statusCode = 404;
    res.end();
  }).pipe(res);
}

server.listen(process.env.PORT);

process.on('uncaughtException', function (e) { });




var http = require('http');
var fs = require('fs');
var path = require('path');
var server = http.createServer(onrequest);


function onrequest (req, res) {
  console.log('%s %s', req.method, req.url);
  if ('/' == req.url) {
    req.url = '/index.html';
  } else if ('/favicon.ico' == req.url) {
    res.statusCode = 404;
    return res.end();
  }

  fs.createReadStream(path.join(__dirname, req.url))
  .on('error', function (e) {
    console.error(e);
    res.statusCode = 404;
    res.end();
  }).pipe(res);
}

server.listen(5000, function() {
    console.log('Listening on port %d', server.address().port);
});

process.on('uncaughtException', function (e) { });
