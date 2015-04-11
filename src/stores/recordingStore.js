var io = require('socket.io-client');
var Reflux = require('reflux');

var Actions = require('../actions');
var playbackStateStore = require('./playbackStateStore');
var motorStore = require('./motorStore');

module.exports = Reflux.createStore({
	listenables: Actions,

	init() {
		this.listenTo(playbackStateStore, this.playbackUpdated);
		this.listenTo(motorStore, this.motorUpdated);
		this.isRecording = false;
		this.currentRecording = [];
	},

	getDefaultData() {
		return this.currentRecording;
	},

	playbackUpdated(state) {
		switch (state) {
			case 'recording':
				this.currentRecording = [];
				this.recordingStartTime = new Date();
				this.isRecording = true;
				this.trigger(this.currentRecording);
				break;
			case 'stopped':
			case 'playing':
				this.isRecording = false;
				break;
		}
	},

	motorUpdated(value) {
		if (!this.isRecording)
			return;
		
		this.currentRecording.push({
			time: (new Date()) - this.recordingStartTime,
			value: value
		});
		this.trigger(this.currentRecording);
	}
});
