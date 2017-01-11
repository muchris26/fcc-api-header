var http = require('http');
var url = require('url');

var port = process.env.PORT || 8888;

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	var parsedURL = url.parse(request.url);
	var URLpath = parsedURL.pathname.replace("/", "");
	response.write(date_test(URLpath));
	response.end();	
}).listen(port);

function date_test(date_in) {
	var date1 = parseInt(date_in);
	console.log(date_in.replace(/[A-Za-z]/gi, ""));
	if (date_in.replace(/[A-Za-z]/gi, "").length < 13) {
		date1 = Date.parse(date_in.replace("%", " "));
	}
	var date2 = new Date(date1).toDateString();
	console.log(date_in, date_in.replace(/%/gi, " "), date1, date2);
	return '{"unix": ' + date1 + ', "natural": ' + date2 + '}';
}

// localhost:8888/Dec 11 2011
// Formats accepted:
// Month/YYYY/D
// Month-YYYY-D
// M/D/YYYY
// M-D-YYYY