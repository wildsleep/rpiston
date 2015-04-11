var bootstrap = require('react-bootstrap');
var React = require('react');
var Reflux = require('reflux');

var Recording = require('../models/Recording');
require('./RecordingLog.less');

var RecordingLog = React.createClass({
	propTypes: {
		recording: React.PropTypes.instanceOf(Recording).isRequired
	},

	render() {
		return (
			<bootstrap.Row>
				<bootstrap.Col xs={12}>
					<pre className='recording-text'>
						{this.props.recording.toText()}
					</pre>
				</bootstrap.Col>
			</bootstrap.Row>
		);
	}
});

module.exports = RecordingLog;
