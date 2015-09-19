import * as ActionTypes from '../constants/ActionTypes';
import socket from '../socket';

const increment = 0.05;

export function setMotor(value) {
	return (dispatch) => {
		dispatch({ type: ActionTypes.SET_MOTOR, value });
		socket.emit('set-motor', value);
	}
}

export function decreaseMotor() {
	return (dispatch, getState) => {
		const { motor } = getState();
		const updated = Math.max(0, motor - increment);

		dispatch({ type: ActionTypes.DECREASE_MOTOR });
		socket.emit('set-motor', updated);
	}
}

export function increaseMotor() {
	return (dispatch, getState) => {
		const { motor } = getState();
		const updated = Math.min(1, motor + increment);

		dispatch({ type: ActionTypes.INCREASE_MOTOR });
		socket.emit('set-motor', updated);
	}
}

export function motorUpdated(value) {
	return { type: ActionTypes.MOTOR_UPDATED, value };
}
