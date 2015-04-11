var React = require('react');

var ManualMotorControl = require('../components/ManualMotorControl');
var RecordingControlButtons = require('../components/RecordingControlButtons');
var RecordingLog = require('../components/RecordingLog');

var RecordPage = React.createClass({
	render() {
		return (
			<div>
				<ManualMotorControl />
				<hr />
				<RecordingControlButtons />
				<RecordingLog />
			</div>
		)
	}
});

module.exports = RecordPage;
