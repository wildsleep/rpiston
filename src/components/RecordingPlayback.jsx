var React = require('react');
var Reflux = require('reflux');

var Actions = require('../actions');

var RecordingPlayback = React.createClass({
	propTypes: {
		recording: React.PropTypes.array.isRequired,
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
		var nextEvent = this.props.recording.filter((event) => event.time > this.state.lastTime)[0];
		if (!nextEvent) {
			Actions.stopRecording();
			return;
		}
		var timeUntilEvent = nextEvent.time - this.state.lastTime;
		var timeout = setTimeout(() => this.triggerRecordedEvent(nextEvent), timeUntilEvent);
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
