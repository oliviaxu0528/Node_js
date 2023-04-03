const http = require('http'); //import http module

const server = http.createServer((req,res)=> {
    console.log(req);
    process.exit();
});

server.listen(8000);
