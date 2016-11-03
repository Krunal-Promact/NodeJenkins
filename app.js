var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("Hello World from github to jenkins. there is lot of issues while creating this pipeline");
});

app.listen(4000);
