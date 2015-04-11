var Reflux = require('reflux');

var Actions = require('../actions');

module.exports = Reflux.createStore({
	listenables: Actions,

	init() {
		this.playbackState = 'stopped';
	},

	getDefaultData() {
		return this.playbackState;
	},

	onStartRecording() {
		this.playbackState = 'recording';
		this.trigger(this.playbackState);
	},

	onStopRecording() {
		this.playbackState = 'stopped';
		this.trigger(this.playbackState);
	},

	onPlayRecording() {
		this.playbackState = 'playing';
		this.trigger(this.playbackState);
	}
});
