var io = require('socket.io-client');
var Reflux = require('reflux');
var saveAs = require('filesaver.js');

var Actions = require('../actions');
var playbackStateStore = require('./playbackStateStore');
var motorStore = require('./motorStore');
var Recording = require('../models/Recording');

module.exports = Reflux.createStore({
	listenables: Actions,

	init() {
		this.listenTo(playbackStateStore, this.playbackUpdated);
		this.listenTo(motorStore, this.motorUpdated);
		this.isRecording = false;
		this.currentRecording = new Recording();
	},

	getDefaultData() {
		return this.currentRecording;
	},

	playbackUpdated(state) {
		switch (state) {
			case 'recording':
				this.currentRecording = new Recording();
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
		
		this.currentRecording.addEvent({
			time: (new Date()) - this.recordingStartTime,
			value: value
		});
		this.trigger(this.currentRecording);
	},

	onSaveRecording() {
		var serialized = new Blob(
			[ this.currentRecording.toText() ],
			{ type: 'text/plain;charset=utf-8' });
		saveAs(serialized, 'rpiston_' + (new Date()).toISOString() + '.txt');
	},

	onLoadRecording(data) {
		this.currentRecording = Recording.fromText(data);
		this.trigger(this.currentRecording);
	}
});
