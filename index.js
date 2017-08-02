"use strict";

var five = require('johnny-five');
var Omega2 = require('omega2-io');

var board = new five.Board({
  io: new Omega2()
});

board.on('ready', function () {
  var led = new five.Led();
  led.blink();

  this.repl.inject({ led: led });
});
