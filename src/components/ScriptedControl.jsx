var React = require('react');
var Reflux = require('reflux');

var Actions = require('../actions');

var ScriptedControl = React.createClass({
	propTypes: {
		script: React.PropTypes.shape({
			nextEventAfter: React.PropTypes.func.isRequired
		}).isRequired,
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
			this.queueEvent();
		}
		else if (props.playbackState !== 'playing') {
			clearTimeout(this.state.nextTimeout);
			this.setState({ lastTime: -1, nextTimeout: null });
		}
	},

	componentWillUnmount() {
		clearTimeout(this.state.nextTimeout);
	},

	queueEvent() {
		var event = this.props.script.nextEventAfter(this.state.lastTime);
		if (!event) {
			Actions.stopRecording();
			return;
		}
		var timeUntilEvent = event.time - this.state.lastTime;
		var timeout = setTimeout(() => this.triggerEvent(event), timeUntilEvent);
		this.setState({ nextTimeout: timeout });
	},

	triggerEvent(event) {
		Actions.setMotor(event.value);
		this.setState({ lastTime: event.time });
		this.queueEvent()
	},

	render() {
		return null;
	}
});

module.exports = ScriptedControl;
