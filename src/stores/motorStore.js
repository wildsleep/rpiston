var Reflux = require('reflux');

var socket = require('../socket');
var Actions = require('../actions');

module.exports = Reflux.createStore({
	listenables: Actions,

	init() {
		this.value = 0;
		this.increment = 0.05;

		socket.on('motor', this.updateValue.bind(this));
	},

	getDefaultData() {
		return this.value;
	},

	updateValue(value) {
		this.value = value;
		this.trigger(this.value);
	},

	onSetMotor(value) {
		socket.emit('set-motor', value);
	},

	onDecreaseMotor() {
		socket.emit('set-motor', Math.max(0, this.value - this.increment));
	},

	onIncreaseMotor() {
		socket.emit('set-motor', Math.min(1, this.value + this.increment));
	}
});
