var React = require('react');

var ManualMotorControl = require('../components/ManualMotorControl');
var RecordingControlButtons = require('../components/RecordingControlButtons');

module.exports = React.createClass({
	render() {
		return (
			<div>
				<ManualMotorControl />
				<hr />
				<RecordingControlButtons />
			</div>
		)
	}
});
