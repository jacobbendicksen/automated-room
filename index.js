"use strict";

var path = require('path');
var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/lights-granular', (req, res) => {
  res.sendFile(path.join(__dirname+'/lights-granular.html'));
})

app.get('/lights/on', (req, res) => {
  console.log('lights on');
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/lights/off', (req, res) => {
  console.log('lights off');
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/lights/rainbow', (req, res) => {
  console.log('rainbow');
  res.sendFile(path.join(__dirname + '/lights-granular.html'));
});

app.get('/lights/night', (req, res) => {
  console.log('night');
  res.sendFile(path.join(__dirname + '/lights-granular.html'));
});

app.get('/lights/theater', (req, res) => {
  console.log('theater');
  res.sendFile(path.join(__dirname + '/lights-granular.html'));
});

app.get('/lights/hex', (req, res) => {
  console.log('hex: ' + req.query.hex);
  res.sendFile(path.join(__dirname + '/lights-granular.html'));
});

app.get('/lights/rgb', (req, res) => {
  console.log('rgb: ' + req.query.red + ', ' + req.query.blue + ', ' + req.query.green);
  res.sendFile(path.join(__dirname + '/lights-granular.html'));
});

app.get('/lights/brightness/:percent', (req, res) => {
  var percent = req.params.percent;
  console.log('brightness at ' + percent);
  res.sendFile(path.join(__dirname + '/lights-granular.html'));
});

app.listen(3000);
console.log('Server running on port 3000');
