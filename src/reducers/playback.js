import * as ActionTypes from '../constants/ActionTypes';

export default function playback(state = 'stopped', action) {
	switch (action.type) {
		case ActionTypes.START_RECORDING:
			return 'recording';
		case ActionTypes.STOP_RECORDING:
			return 'stopped';
		case ActionTypes.PLAY_RECORDING:
			return 'playing';
		default:
			return state;
	}
}
