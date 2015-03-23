var http = require('http');
PORT_NUMBER = process.env.PORT || 6789
http.createServer(function(request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  response.end('Hello Node!go!\n');
}).listen(PORT_NUMBER);

console.log('Server running at http://127.0.0.1:' + PORT_NUMBER);
