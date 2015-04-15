var React = require('react');
var Reflux = require('reflux');

var MotorBar = require('../components/MotorBar');
var MotorControlButtons = require('../components/MotorControlButtons');
var RecordingRecordStopPlayButtons = require('../components/RecordingRecordStopPlayButtons');
var RecordingLog = require('../components/RecordingLog');
var ScriptedControl = require('../components/ScriptedControl');
var RecordingLoadSaveButtons = require('../components/RecordingLoadSaveButtons');
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
				<MotorBar motorValue={this.state.motorValue} />
				<MotorControlButtons />
				<hr />
				<RecordingRecordStopPlayButtons playbackState={this.state.playbackState} />
				<RecordingLog recording={this.state.recording} />
				<RecordingLoadSaveButtons />

				<ScriptedControl playbackState={this.state.playbackState} script={this.state.recording} />
			</div>
		)
	}
});

module.exports = RecordPage;
