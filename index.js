var http = require("http");
var hostname = "127.0.0.1"; /**내 컴퓨터 주소 본인 컴퓨터 가리킴*/
var port = 8080;

const server = http.createServer(function (req, res) {
  console.log("Request: ", req);
  res.end("Hello client");
});

server.listen(port, hostname); /**기다리고 있다. */

console.log("react-web server on!");
