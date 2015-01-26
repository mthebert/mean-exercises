var tls = require('tls'),
    fs = require('fs'),
    msg = "test";
var options = {
  host: '192.168.11.21',
  key: fs.readFileSync('../server.pem'),
  cert: fs.readFileSync('../server.crt'),
  ca: fs.readFileSync('../client.crt')
};
tls.createServer(options, function (s) {
  s.write(msg+"\n");
  s.pipe(s);
}).listen(8080);
