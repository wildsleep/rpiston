try {
	var tessel = require('tessel');

	function led(n, value) {
		switch (value) {
			case 'on': return tessel.led[n].on();
			case 'off': return tessel.led[n].off();
			case 'toggle': return tessel.led[n].toggle();
		}
	}

	module.exports = {
		analogWrite: function (value) {
			tessel.port.B.pin[7].analogWrite(value);
		},
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
		analogWrite: function (value) {
			console.log('Wrote to Tessel pin B7, value ' + value);
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
