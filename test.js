var http = require('http');

PORT_NUMBER = process.env.PORT || 9876
http.createServer(function(request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  response.end('Hello World\nnode version:' + process.version + '\npid: ' + process.pid);
}).listen(PORT_NUMBER);

console.log('Server running at http://127.0.0.1:' + PORT_NUMBER);
