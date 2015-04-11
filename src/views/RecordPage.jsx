var React = require('react');
var Reflux = require('reflux');

var ManualMotorControl = require('../components/ManualMotorControl');
var RecordingControlButtons = require('../components/RecordingControlButtons');
var RecordingLog = require('../components/RecordingLog');
var motorStore = require('../stores/motorStore');
var recordingStore = require('../stores/recordingStore');

var RecordPage = React.createClass({
	mixins: [
		Reflux.connect(motorStore, 'motorValue'),
		Reflux.connect(recordingStore, 'recording')
	],

	getInitialState() {
		return {
			motorValue: motorStore.getDefaultData(),
			recording: recordingStore.getDefaultData()
		};
	},

	render() {
		return (
			<div>
				<ManualMotorControl motorValue={this.state.motorValue} />
				<hr />
				<RecordingControlButtons recordingState={this.state.recording.recordingState} />
				<RecordingLog recording={this.state.recording.currentRecording} />
			</div>
		)
	}
});

module.exports = RecordPage;
