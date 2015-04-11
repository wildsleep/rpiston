var bootstrap = require('react-bootstrap');
var React = require('react');
var Reflux = require('reflux');

require('./RecordingLog.less');

var RecordingLog = React.createClass({
	propTypes: {
		recording: React.PropTypes.array.isRequired
	},

	recordingText() {
		return this.props.recording
			.map((event) => 't=' + event.time + ' ' + event.value)
			.join('\n');
	},

	render() {
		return (
			<bootstrap.Row>
				<bootstrap.Col xs={12}>
					<pre className='recording-text'>
						{this.recordingText()}
					</pre>
				</bootstrap.Col>
			</bootstrap.Row>
		);
	}
});

module.exports = RecordingLog;
