import React, { Component, PropTypes } from 'react';

export default class ScriptedControl extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lastTime: -1,
			nextTimeout: null
		};
	}

	static propTypes = {
		script: PropTypes.shape({
			nextEventAfter: PropTypes.func.isRequired
		}).isRequired,
		playbackState: PropTypes.string.isRequired,
		stopRecording: PropTypes.func.isRequired,
		setMotor: PropTypes.func.isRequired
	}

	componentWillReceiveProps(props) {
		if (props.playbackState === 'playing' && this.props.playbackState !== 'playing') {
			this.setState({ lastTime: -1 });
			this.queueEvent();
		}
		else if (props.playbackState !== 'playing') {
			clearTimeout(this.state.nextTimeout);
			this.setState({ lastTime: -1, nextTimeout: null });
		}
	}

	componentWillUnmount() {
		clearTimeout(this.state.nextTimeout);
	}

	queueEvent() {
		var event = this.props.script.nextEventAfter(this.state.lastTime);
		if (!event) {
			this.props.stopRecording();
			return;
		}
		var timeUntilEvent = event.time - this.state.lastTime;
		var timeout = setTimeout(() => this.triggerEvent(event), timeUntilEvent);
		this.setState({ nextTimeout: timeout });
	}

	triggerEvent(event) {
		this.props.setMotor(event.value);
		this.setState({ lastTime: event.time });
		this.queueEvent()
	}

	render() {
		return false;
	}
}
