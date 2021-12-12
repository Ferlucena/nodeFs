const http = require('http');
const fs = require('fs');
const { listenerCount } = require('process');

//Creacion del Servidor
http.createServer(function(req,res){
    fs.readFile('index.html', function(err,data){
        res.writeHead(200,{'Content-type':'text/html; charset=utf-8'});
        res.write(data);
        return res.end();
        
    });
}).listen(3000);
