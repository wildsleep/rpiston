import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faSave } from '@fortawesome/free-solid-svg-icons';
import FileButton from './FileButton';

export default function RecordingLoadSaveButtons({ loadRecording, saveRecording }) {
	return (
		<div className="flex -mx-4 mb-4">
			<FileButton onLoad={loadRecording}>
				<FontAwesomeIcon icon={faFolderOpen} fixedWidth /> Load
			</FileButton>
			<button className="button button-blue flex-1 mx-4" onClick={saveRecording}>
				<FontAwesomeIcon icon={faSave} fixedWidth /> Save
			</button>
		</div>
	);
}

RecordingLoadSaveButtons.propTypes = {
	loadRecording: PropTypes.func.isRequired,
	saveRecording: PropTypes.func.isRequired
}
