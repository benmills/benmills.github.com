var http = require('http');
var fs   = require('fs');
var url  = require('url');

http.createServer(function (req, res) {
  var reqFile = url.parse(req.url).pathname;
  if (reqFile === "/") reqFile = "/index.html";

  fs.readFile(reqFile.substr(1), function (err, data) {
    if (err) res.end();
    else res.end(data.toString());
  });
}).listen(process.env.PORT || 8080);
