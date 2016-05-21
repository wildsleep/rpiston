try {
	var tessel = require('tessel');

	var addressMcp4725 = 0x60;
	var i2c = new tessel.port.B.I2C(addressMcp4725);

	function led(n, value) {
		switch (value) {
			case 'on': return tessel.led[n].on();
			case 'off': return tessel.led[n].off();
			case 'toggle': return tessel.led[n].toggle();
		}
	}

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
		// var firstByte = 0xC << 4 // ........................ Device code
		var secondByte =
			(1 << 6) | // .................................. C1
			((writeToEeprom ? 1 : 0) << 5); // ............. C0
		var thirdByte = twelveBitValue >> 4; // ............ D11-D4
		var fourthByte = (twelveBitValue & 0xF) << 4; // ... D3-D0
		var buffer = new Buffer([secondByte, thirdByte, fourthByte]);
		i2c.transfer(buffer, handleError);
	}

	module.exports = {
		analogWrite: analogWrite,
		redLed: function (value) {
			led(0, value);
		},
		greenLed: function (value) {
			led(2, value);
		},
		blueLed: function (value) {
			led(3, value);
		}
	}

} catch (e) {
	module.exports = {
		analogWrite: function (value, writeToEeprom) {
			console.log('Wrote to MCP4725, value ' + value +
				(writeToEeprom ? ' (saved to EEPROM)' : ''));
		},
		redLed: function (value) {
			console.log('Set red LED to ' + value);
		},
		greenLed: function (value) {
			console.log('Set green LED to ' + value);
		},
		blueLed: function (value) {
			console.log('Set blue LED to ' + value);
		}
	}
}
