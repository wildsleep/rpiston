var bootstrap = require('react-bootstrap');
var React = require('react');
var Reflux = require('reflux');

var Actions = require('../actions');
var RecordingLoadButton = require('./recordingButtons/RecordingLoadButton');
var RecordingSaveButton = require('./recordingButtons/RecordingSaveButton');

var RecordingLoadSaveButtons = React.createClass({
	render() {
		return (
			<bootstrap.Row>
				<bootstrap.Col xs={6}>
					<RecordingLoadButton />
				</bootstrap.Col>
				<bootstrap.Col xs={6}>
					<RecordingSaveButton />
				</bootstrap.Col>
			</bootstrap.Row>
		);
	}
});

module.exports = RecordingLoadSaveButtons;
