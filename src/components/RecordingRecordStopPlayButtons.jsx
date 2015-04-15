var bootstrap = require('react-bootstrap');
var React = require('react');
var Reflux = require('reflux');

var Actions = require('../actions');
var RecordingRecordButton = require('./recordingButtons/RecordingRecordButton');
var RecordingStopButton = require('./recordingButtons/RecordingStopButton');
var RecordingPlayButton = require('./recordingButtons/RecordingPlayButton');

var RecordingRecordStopPlayButtons = React.createClass({
	propTypes: {
		playbackState: React.PropTypes.string.isRequired
	},

	render() {
		return (
			<bootstrap.Row>
				<bootstrap.Col xs={4}>
					<RecordingRecordButton playbackState={this.props.playbackState} />
				</bootstrap.Col>
				<bootstrap.Col xs={4}>
					<RecordingStopButton />
				</bootstrap.Col>
				<bootstrap.Col xs={4}>
					<RecordingPlayButton playbackState={this.props.playbackState} />
				</bootstrap.Col>
			</bootstrap.Row>
		);
	}
});

module.exports = RecordingRecordStopPlayButtons;
