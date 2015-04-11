var io = require('socket.io-client');
var Reflux = require('reflux');

var Actions = require('./actions');
var motorStore = require('./motorStore');

module.exports = Reflux.createStore({
	listenables: Actions,

	init() {
		this.listenTo(motorStore, this.motorUpdated);
		this.recordingState = 'stopped';
		this.currentRecording = [];
	},

	getDefaultData() {
		return {
			recordingState: this.recordingState,
			currentRecording: this.currentRecording
		};
	},

	onStartRecording() {
		this.recordingState = 'recording';
		this.currentRecording = [];
		this.recordingStartTime = new Date();
		this.updateRecording();
	},

	onStopRecording() {
		this.recordingState = 'stopped';
		this.updateRecording();
	},

	motorUpdated(value) {
		if (this.recordingState === 'recording') {
			this.currentRecording.push({
				time: (new Date()) - this.recordingStartTime,
				value: value
			});
		}
		this.updateRecording();
	},

	updateRecording() {
		this.trigger({
			recordingState: this.recordingState,
			currentRecording: this.currentRecording
		});
	}
});
