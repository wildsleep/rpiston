var bootstrap = require('react-bootstrap');
var React = require('react');
var Reflux = require('reflux');

var Actions = require('../actions');
var RecordingStopButton = require('./recordingButtons/RecordingStopButton');
var RecordingPlayButton = require('./recordingButtons/RecordingPlayButton');

var RecordingStopPlayButtons = React.createClass({
	propTypes: {
		playbackState: React.PropTypes.string.isRequired
	},

	render() {
		return (
			<bootstrap.Row>
				<bootstrap.Col xs={6}>
					<RecordingStopButton />
				</bootstrap.Col>
				<bootstrap.Col xs={6}>
					<RecordingPlayButton playbackState={this.props.playbackState} />
				</bootstrap.Col>
			</bootstrap.Row>
		);
	}
});

module.exports = RecordingStopPlayButtons;
