var http = require("http");

var PORTa = 7000;
var PORTb = 7500;

function handleRequestA(request, response) {
    response.end("You're the best! Around! Nothing's gonna ever keep you down!");  
}

function handleRequestB(request, response) {
    response.end("I can tell that your parents hated you. Your bath toys were a toaster and a radio.");  
}

var serverA = http.createServer(handleRequestA);
var serverB = http.createServer(handleRequestB);


serverA.listen(PORTa, function() {  
console.log("server listening on: http://localhost:%s", PORTa);
});

serverB.listen(PORTb, function() {  
console.log("server listening on: http://localhost:%s", PORTb);
});
