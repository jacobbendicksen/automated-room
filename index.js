"use strict";

var path = require('path');
var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);
console.log('Server running on port 3000');
