var http = require('http');
var url = require('url');

var port = process.env.PORT || 8888;

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	var ip_add = request.connection.remoteAddress.replace(/[f:]/gi, ""); //IP Address has :ffff: in front of it

	var lang = request.headers["accept-language"].split(",")[0];

	var sw = request.headers["user-agent"];

	response.write('{"ip address":"' + ip_add + 
				   '","language":"' + lang +
				   '","software":"' + sw +
				   '"}');

	response.end();	
}).listen(port);

