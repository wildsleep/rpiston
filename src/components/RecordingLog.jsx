var bootstrap = require('react-bootstrap');
var React = require('react');
var Reflux = require('reflux');

var Actions = require('../actions');
var recordingStore = require('../recordingStore');
require('./RecordingLog.less');

var RecordingLog = React.createClass({
	mixins: [ Reflux.listenTo(recordingStore, 'onRecordingUpdate') ],

	getInitialState() {
		var recordingData = recordingStore.getDefaultData();
		return {
			recordingText: this.recordingText(recordingData.currentRecording)
		};
	},

	onRecordingUpdate(recordingData) {
		this.setState({
			recordingText: this.recordingText(recordingData.currentRecording)
		});
	},

	recordingText(recording) {
		return recording
			.map((event) => 't=' + event.time + ' ' + event.value)
			.join('\n');
	},

	render() {
		return (
			<bootstrap.Row>
				<bootstrap.Col xs={12}>
					<pre className='recording-text'>
						{this.state.recordingText}
					</pre>
				</bootstrap.Col>
			</bootstrap.Row>
		);
	}
});

module.exports = RecordingLog;
