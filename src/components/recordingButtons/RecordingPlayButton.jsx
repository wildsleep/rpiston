var bootstrap = require('react-bootstrap');
var React = require('react');
var Reflux = require('reflux');

var Actions = require('../../actions');

var RecordingPlayButton = React.createClass({
	propTypes: {
		playbackState: React.PropTypes.string.isRequired
	},

	handlePlay() {
		Actions.playRecording();
	},

	playEnabled() {
		return this.props.playbackState === 'stopped';
	},

	render() {
		return (
			<bootstrap.Button bsStyle='success' block onClick={this.handlePlay} disabled={!this.playEnabled()}>
				<i className='fa fa-play fa-fw' /> Play
			</bootstrap.Button>
		);
	}
});

module.exports = RecordingPlayButton;
