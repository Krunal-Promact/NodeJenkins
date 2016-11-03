var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("Hello World from github to jenkins");
});

app.listen(4000);
