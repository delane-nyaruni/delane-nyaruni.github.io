'use strict';

var http = require("http");
http.createServer(function (request, response) {
// Send the HTTP header
// HTTP Status: 200 : OK
// Content Type: text/plain
response.writeHead(200, {'Content-Type': 'text/plain'});
// Send the response body as "Server connected"
response.end('Server connected successfully');
}).listen(8082);
/*  
var port = 8081;
*/
//server start
var serverInit = `[*] Initiating Local Wireless Connection(LWC) Server.../`;
var serverAuth = `[*] Started Principal Server`;
var serverStatus = `[*] Principal Server online @ LWC Server`;
// Console will print the message
console.log(serverInit);
console.log(serverAuth);
console.log(serverStatus);