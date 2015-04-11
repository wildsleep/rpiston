var i2c = require('./i2c');

var address = 0x60;
var wire = new i2c(address, {device: '/dev/i2c-1'});

function handleError(error) {
	if (error)
		console.error(error);
}

function analogWrite(value, writeToEeprom) {
	// LERP from [0.0, 1.0] to [0x000, 0xFFF]
	var twelveBitValue = (value * 0xFFF) | 0;

	// Construct packet
	// See data sheet, page 25 (fig. 6-2)
	// https://cdn.sparkfun.com/datasheets/BreakoutBoards/MCP4725_2009.pdf
	var secondByte =
		(1 << 6) | // .................................. C1
		((writeToEeprom ? 1 : 0) << 5); // ............. C0
	var thirdByte = twelveBitValue >> 4; // ............ D11-D4
	var fourthByte = (twelveBitValue & 0xF) << 4; // ... D3-D0

	wire.writeBytes(secondByte, [thirdByte, fourthByte], handleError);
}

module.exports = { analogWrite: analogWrite };

