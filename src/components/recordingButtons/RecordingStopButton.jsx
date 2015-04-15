var bootstrap = require('react-bootstrap');
var React = require('react');
var Reflux = require('reflux');

var Actions = require('../../actions');

var RecordingStopButton = React.createClass({
	handleStop() {
		Actions.stopRecording();
	},
	
	render() {
		return (
			<bootstrap.Button block onClick={this.handleStop}>
				<i className='fa fa-stop fa-fw' /> Stop
			</bootstrap.Button>
		);
	}
});

module.exports = RecordingStopButton;
