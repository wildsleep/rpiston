var bootstrap = require('react-bootstrap');
var React = require('react');
var Reflux = require('reflux');

var Actions = require('../actions');

var RecordingControlButtons = React.createClass({
	propTypes: {
		recordingState: React.PropTypes.string.isRequired
	},

	handlePlay() {
		Actions.playRecording();
	},

	handleStop() {
		Actions.stopRecording();
	},

	handleRecord() {
		if (this.recordEnabled()) {
			Actions.startRecording();
		}
	},

	recordEnabled() {
		return this.props.recordingState === 'stopped';
	},

	render() {
		return (
			<bootstrap.Row>
				<bootstrap.Col xs={4}>
					<bootstrap.Button bsStyle='danger' block onClick={this.handleRecord} disabled={!this.recordEnabled()}>
						<i className='fa fa-circle fa-fw' /> Rec
					</bootstrap.Button>
				</bootstrap.Col>
				<bootstrap.Col xs={4}>
					<bootstrap.Button block onClick={this.handleStop}>
						<i className='fa fa-stop fa-fw' /> Stop
					</bootstrap.Button>
				</bootstrap.Col>
				<bootstrap.Col xs={4}>
					<bootstrap.Button bsStyle='success' block onClick={this.handlePlay}>
						<i className='fa fa-play fa-fw' /> Play
					</bootstrap.Button>
				</bootstrap.Col>
			</bootstrap.Row>
		);
	}
});

module.exports = RecordingControlButtons;
