import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStop, faPlay } from '@fortawesome/free-solid-svg-icons';

export default function RecordingStopPlayButtons(props) {
	const { stopRecording, playRecording, playbackState } = props;
	return (
		<div className="flex -mx-4 mb-4">
			<button className="button button-blue flex-1 mx-4" onClick={stopRecording}>
				<FontAwesomeIcon icon={faStop} fixedWidth /> Stop
			</button>
			<button className="button button-green flex-1 mx-4" onClick={playRecording} disabled={playbackState !== 'stopped'}>
				<FontAwesomeIcon icon={faPlay} fixedWidth /> Play
			</button>
		</div>
	);
}

RecordingStopPlayButtons.propTypes = {
	stopRecording: PropTypes.func.isRequired,
	playRecording: PropTypes.func.isRequired,
	playbackState: PropTypes.string.isRequired
};
