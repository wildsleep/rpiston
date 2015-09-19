import * as ActionTypes from '../constants/ActionTypes';

export function connectionStatusChange(status) {
	return { type: ActionTypes.CONNECTION_STATUS_CHANGE, status };
}
