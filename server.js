var a = require('http');
a.createServer( function(request, response){

	response.write('we got a response ');
	response.close();
}).listen(8000);
