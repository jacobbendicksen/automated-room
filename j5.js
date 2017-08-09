"use strict";

var five = require('johnny-five');
var Omega2 = require('./omega2-io');
// var SerialPort = require('serialport').SerialPort;
// var serialport = new SerialPort('/dev/ttyACM0', {
//   baudrate: 57600
// });

var board = new five.Board({
  io: new Omega2()
  // port: serialport
});

board.on('ready', function() {
  var led0 = new five.Led(0);
  led0.blink();

  // var led13 = new five.Led(13);
  // led13.blink();

  this.repl.inject({
    led: led0
  });
});
