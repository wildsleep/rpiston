import * as ActionTypes from '../constants/ActionTypes';

export default function motor(state = 0, action) {
	switch (action.type) {
		case ActionTypes.MOTOR_UPDATED:
			return action.value;
		default:
			return state;
	}
}
