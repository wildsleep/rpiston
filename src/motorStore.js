var io = require('socket.io-client');
var Reflux = require('reflux');

var Actions = require('./actions');

module.exports = Reflux.createStore({
	listenables: Actions,

	init() {
		this.value = 0;
		this.increment = 0.05;

		this.socket = io();
		this.socket.on('motor', this.updateValue.bind(this));
	},

	getDefaultData() {
		return this.value;
	},

	updateValue(value) {
		this.value = value;
		this.trigger(this.value);
	},

	onSetMotor(value) {
		this.socket.emit('set-motor', value);
	},

	onDecreaseMotor() {
		this.socket.emit('set-motor', Math.max(0, this.value - this.increment));
	},

	onIncreaseMotor() {
		this.socket.emit('set-motor', Math.min(1, this.value + this.increment));
	}
});
