
const http = require("http");
//const host = "0.0.0.0";
const host = "127.0.0.1";
const port = "3000";



const server = http.createServer(function(req, res){
	
	res.statusCode = 200;
	res.setHeader('Content-type', 'text/plain'); //name, value
	
	
	res.end("Server started. Hello from server."); //will be displayed in browser


});

server.listen(port, host, function(){
	
	console.log("Test server is running on: " + host + ": " + port); //will be displayed in command prompt
	
});
