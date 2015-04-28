var Reflux = require('reflux');

var socket = require('../socket');

module.exports = Reflux.createStore({
	init() {
		this.status = 'Connected';
		this.ok = true;
		this.log = [];

		var socketEvents = [
			'connect_error', 'connect_timeout',
			'reconnect', 'reconnect_attempt',
			'reconnecting', 'reconnect_error',
			'reconnect_failed', 'ping', 'pong'
		];
		socketEvents.forEach(socketEvent => socket.on(socketEvent, this[socketEvent].bind(this)));
	},

	getDefaultData() {
		return this.getData();
	},

	getData() {
		return {
			status: this.status,
			ok: this.ok,
			log: this.log
		}
	},

	connect_error(error) {
		this.log.push({ event: 'connect_error', error: error });
		this.status = 'Connection error';
		this.ok = false;
		this.trigger(this.getData());
	},

	connect_timeout() {
		this.log.push({ event: 'connect_timeout' });
		this.status = 'Connection error';
		this.ok = false;
		this.trigger(this.getData());
	},

	reconnect(attempt) {
		this.log.push({ event: 'reconnect', attempt: attempt });
		this.status = `Reconnected! (After ${attempt} attempt${attempt !==1 ? 's' : ''})`;
		this.ok = true;
		this.trigger(this.getData());
	},

	reconnect_attempt() {
		this.log.push({ event: 'reconnect_attempt' });
		this.status = 'Reconnecting...';
		this.ok = false;
		this.trigger(this.getData());
	},

	reconnecting(attempt) {
		this.log.push({ event: 'reconnecting' });
		this.status = `Reconnecting... (attempt ${attempt})`;
		this.ok = false;
		this.trigger(this.getData());	
	},

	reconnect_error(error) {
		this.log.push({ event: 'reconnect_error', error: error });
		this.status = 'Reconnect error';
		this.ok = false;
		this.trigger(this.getData());		
	},

	reconnect_failed() {
		this.log.push({ event: 'reconnect_failed' });
		this.status = 'Failed to reconnect!';
		this.ok = false;
		this.trigger(this.getData());
	},

	ping() {
		this.log.push({ event: 'ping' });
		this.trigger(this.getData());
	},

	pong(latency) {
		this.log.push({ event: 'pong', latency: latency });
		this.status = `Ping: ${latency}`;
		this.ok = true;
		this.trigger(this.getData());
	}
});
