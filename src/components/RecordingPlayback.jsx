var React = require('react');
var Reflux = require('reflux');

var Actions = require('../actions');
var Recording = require('../models/Recording');

var RecordingPlayback = React.createClass({
	propTypes: {
		recording: React.PropTypes.instanceOf(Recording).isRequired,
		playbackState: React.PropTypes.string.isRequired
	},

	getInitialState() {
		return {
			lastTime: -1,
			nextTimeout: null
		};
	},

	componentWillReceiveProps(props) {
		if (props.playbackState === 'playing' && this.props.playbackState !== 'playing') {
			this.setState({ lastTime: -1 });
			this.queueRecordedEvent();
		}
		else if (props.playbackState !== 'playing') {
			clearTimeout(this.state.nextTimeout);
			this.setState({ lastTime: -1, nextTimeout: null });
		}
	},

	componentWillUnmount() {
		clearTimeout(this.state.nextTimeout);
	},

	queueRecordedEvent() {
		var event = this.props.recording.nextEventAfter(this.state.lastTime);
		if (!event) {
			Actions.stopRecording();
			return;
		}
		var timeUntilEvent = event.time - this.state.lastTime;
		var timeout = setTimeout(() => this.triggerRecordedEvent(event), timeUntilEvent);
		this.setState({ nextTimeout: timeout });
	},

	triggerRecordedEvent(event) {
		Actions.setMotor(event.value);
		this.setState({ lastTime: event.time });
		this.queueRecordedEvent()
	},

	render() {
		return null;
	}
});

module.exports = RecordingPlayback;
