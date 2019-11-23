import merge from 'lodash/merge';

import * as ActionTypes from '../constants/ActionTypes';
import Recording from '../models/Recording';

const defaultState = {
	currentRecording: new Recording(),
	startTime: null,
	isRecording: false
};

export default function recording(state = defaultState, action) {
	switch (action.type) {
		case ActionTypes.START_RECORDING:
			return {
				currentRecording: new Recording(),
				startTime: new Date(),
				isRecording: true
			};

		case ActionTypes.STOP_RECORDING:
		case ActionTypes.PLAY_RECORDING:
			return merge({}, state, {
				isRecording: false
			});

		case ActionTypes.LOAD_RECORDING:
			const { data } = action;

			return merge({}, state, {
				currentRecording: Recording.fromText(data)
			});

		case ActionTypes.MOTOR_UPDATED:
			const { value } = action;

			if (!state.isRecording)
				return state;

			return merge({}, state, {
				currentRecording: state.currentRecording.addEvent({
					time: (new Date()) - state.startTime,
					value: value
				})
			});

		default:
			return state;
	}
}
