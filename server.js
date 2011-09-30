var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(302, {
    'Location': 'http://benmills.org'+req.url
  });
  res.end();
}).listen(process.env.PORT || 8080);
