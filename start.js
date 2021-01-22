var http = require('http'), fs = require('fs');
var url = require('url');
var path = require('path');
var express = require('express');
var port = process.env.PORT || 3000;

var app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname)));


app.get('/', function (req, res) {
    rts.sendFile(__dirname + '/index.html');
});
app.listen(port);
