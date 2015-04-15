var bootstrap = require('react-bootstrap');
var React = require('react');
var Reflux = require('reflux');

var Actions = require('../../actions');

var RecordingStopButton = React.createClass({
	propTypes: {
		playbackState: React.PropTypes.string.isRequired
	},

	handleRecord() {
		if (this.recordEnabled()) {
			Actions.startRecording();
		}
	},

	recordEnabled() {
		return this.props.playbackState === 'stopped';
	},
	
	render() {
		return (
			<bootstrap.Button bsStyle='danger' block onClick={this.handleRecord} disabled={!this.recordEnabled()}>
				<i className='fa fa-circle fa-fw' /> Rec
			</bootstrap.Button>
		);
	}
});

module.exports = RecordingStopButton;
