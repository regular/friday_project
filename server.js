var debug = require('debug')('santagame');

var http = require('http');
var fs = require('fs');

debug("hello World. Listening on port 9966");

http.createServer(function (req, res) {
    var contents;
    debug('someone is requesting %s', req.url);
    if (req.url === "/") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        var stream = fs.createReadStream("./friday.html");
        stream.pipe(res);
        debug("just sent the html file!");
    } else {
        debug('file not found!');
        res.writeHead(404);
        res.end("oops!");
    }

}).listen(9966);
