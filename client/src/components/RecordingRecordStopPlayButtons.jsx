import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faStop, faPlay } from '@fortawesome/free-solid-svg-icons';

export default function RecordingRecordStopPlayButtons(props) {
	const { startRecording, stopRecording, playRecording, playbackState } = props;
	return (
		<div className="flex -mx-4 mb-4">
			<button className="button button-red flex-1 mx-4" onClick={startRecording} disabled={playbackState !== 'stopped'}>
				<FontAwesomeIcon icon={faCircle} fixedWidth /> Rec
			</button>
			<button className="button button-blue flex-1 mx-4" onClick={stopRecording}>
				<FontAwesomeIcon icon={faStop} fixedWidth /> Stop
			</button>
			<button className="button button-green flex-1 mx-4" onClick={playRecording} disabled={playbackState !== 'stopped'}>
				<FontAwesomeIcon icon={faPlay} fixedWidth /> Play
			</button>
		</div>
	);
}

RecordingRecordStopPlayButtons.propTypes = {
	startRecording: PropTypes.func.isRequired,
	stopRecording: PropTypes.func.isRequired,
	playRecording: PropTypes.func.isRequired,
	playbackState: PropTypes.string.isRequired
};
