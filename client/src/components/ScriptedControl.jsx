import React from 'react';
import PropTypes from 'prop-types';

export default function ScriptedControl({ script, playbackState, stopRecording, setMotor }) {
	const ref = React.useRef({ lastTime: -1, timeout: null, playing: false });

	React.useEffect(() => {
		if (playbackState === 'playing' && !ref.current.playing) {
			ref.current.playing = true;
			ref.current.lastTime = -1;
			queueEvent();
		}
		if (playbackState !== 'playing') {
			ref.current.playing = false;
			clearTimeout(ref.current.timeout);
		}

		return () => {
			clearTimeout(ref.current.timeout);
		}
	}, [playbackState]);

	return false;

	function queueEvent() {
		const event = script.nextEventAfter(ref.current.lastTime);
		if (event) {
			const timeUntilEvent = event.time - ref.current.lastTime;
			ref.current.timeout = setTimeout(() => triggerEvent(event), timeUntilEvent);
		} else {
			stopRecording();
		}
	}

	function triggerEvent(event) {
		setMotor(event.value);
		ref.current.lastTime = event.time;
		queueEvent();
	}
}

ScriptedControl.propTypes = {
	script: PropTypes.shape({
		nextEventAfter: PropTypes.func.isRequired
	}).isRequired,
	playbackState: PropTypes.string.isRequired,
	stopRecording: PropTypes.func.isRequired,
	setMotor: PropTypes.func.isRequired
};
