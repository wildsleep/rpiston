var bootstrap = require('react-bootstrap');
var React = require('react');
var Reflux = require('reflux');

var Actions = require('../actions');
var recordingStore = require('../recordingStore');

var RecordingControlButtons = React.createClass({
	mixins: [ Reflux.listenTo(recordingStore, 'onRecordingUpdate') ],

	getInitialState() {
		var recordingData = recordingStore.getDefaultData();
		return {
			recordingState: recordingData.recordingState
		}
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
		return this.state.recordingState === 'stopped';
	},

	onRecordingUpdate(recordingData) {
		this.setState({
			recordingState: recordingData.recordingState
		});
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
