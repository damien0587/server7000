var http = require("http");
var PORT1 = 7000; //positive

function handlePositiveRequest(request, response) {
	response.end("You got it, ya genius! Path Hit: " + request.url);
}

var server = http.createServer(handlePositiveRequest);
server.listen(PORT1, function() {
	console.log("Server listening on: http://localhost:" + PORT1);	
});

var PORT2 = 7500; //negative

function handleNegativeRequest(request, response) {
	response.end("It works, ya nerd! Path Hit: " + request.url);
}

var server = http.createServer(handleNegativeRequest);
server.listen(PORT2, function() {
	console.log("Server listening on: http://localhost:" + PORT2);	
});
