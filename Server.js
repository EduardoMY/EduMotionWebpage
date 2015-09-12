var express = require('express')
var app = express()
var http = require('http')
var HttpServer = http.Server(app);

app.use(express.static(__dirname+'/Public'))

app.get('/', function(req, res){
res.senderfile(__dirname + 'index.html')
});

app.listen(3000)
