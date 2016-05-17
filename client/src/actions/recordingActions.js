import { saveAs } from 'filesaver.js';

import * as ActionTypes from '../constants/ActionTypes';

export function startRecording() {
	return { type: ActionTypes.START_RECORDING };
}

export function stopRecording() {
	return { type: ActionTypes.STOP_RECORDING };
}

export function playRecording() {
	return { type: ActionTypes.PLAY_RECORDING };
}

export function loadRecording(data) {
	return { type: ActionTypes.LOAD_RECORDING, data };
}

export function saveRecording() {
	return (dispatch, getState) => {
		const recording = getState().recording.currentRecording;
		const serialized = new Blob(
			[ recording.toText() ],
			{ type: 'text/plain;charset=utf-8' });
		saveAs(serialized, 'rpiston_' + (new Date()).toISOString() + '.txt');

		return { type: ActionTypes.SAVE_RECORDING, recording };
	};
}
