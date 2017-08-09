"use strict";

var five = require('johnny-five');
var Omega2 = require('./omega2-io');
var SerialPort = require('./node_modules/johnny-five/node_modules/serialport').SerialPort;
var serialport = new SerialPort('/dev/ttyACM0', {
  baudrate: 57600
});

// var omega = new five.Board({
//   io: new Omega2()
// });
//
// omega.on('ready', function() {
//   var led = new five.Led(0);
//   led.blink();
// });

var arduino = new five.Board({
  port: serialport
});

arduino.on('ready', function() {
  var led = new five.Led(13);
  led.blink();
});
