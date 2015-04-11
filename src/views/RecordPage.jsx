var React = require('react');
var Reflux = require('reflux');

var ManualMotorControl = require('../components/ManualMotorControl');
var RecordingControlButtons = require('../components/RecordingControlButtons');
var RecordingLog = require('../components/RecordingLog');
var RecordingPlayback = require('../components/RecordingPlayback');
var motorStore = require('../stores/motorStore');
var playbackStateStore = require('../stores/playbackStateStore');
var recordingStore = require('../stores/recordingStore');

var RecordPage = React.createClass({
	mixins: [
		Reflux.connect(motorStore, 'motorValue'),
		Reflux.connect(playbackStateStore, 'playbackState'),
		Reflux.connect(recordingStore, 'recording')
	],

	getInitialState() {
		return {
			motorValue: motorStore.getDefaultData(),
			playbackState: playbackStateStore.getDefaultData(),
			recording: recordingStore.getDefaultData()
		};
	},

	render() {
		return (
			<div>
				<ManualMotorControl motorValue={this.state.motorValue} />
				<hr />
				<RecordingControlButtons playbackState={this.state.playbackState} />
				<RecordingLog recording={this.state.recording} />
				<RecordingPlayback playbackState={this.state.playbackState} recording={this.state.recording} />
			</div>
		)
	}
});

module.exports = RecordPage;
