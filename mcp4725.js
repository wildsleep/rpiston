var i2c = require('i2c');
var address = 0x60;
var wire = new i2c(address, {device: '/dev/i2c-1'});

function handleError(error) {
	if (error)
		console.error(error);
}

function analogWrite(value) {
	// See data sheet, page 25 (fig. 6-2)
	// https://cdn.sparkfun.com/datasheets/BreakoutBoards/MCP4725_2009.pdf
	var twelveBitValue = (value * 0xFFF) | 0;
	var highByte = twelveBitValue >> 4;
	var lowByte = (twelveBitValue & 0xF) << 4;
	wire.writeBytes(0x40, [highByte, lowByte], handleError);
};

module.exports = { analogWrite: analogWrite };

