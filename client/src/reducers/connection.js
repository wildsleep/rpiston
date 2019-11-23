import merge from 'lodash/merge';

import * as ActionTypes from '../constants/ActionTypes';

export default function connection(state = { status: 'connected', ok: true, log: [] }, action) {
	switch (action.type) {
		case ActionTypes.CONNECTION_STATUS_CHANGE:
			const { status } = action;
			return {
				status: status,
				ok: status === 'reconnect',
				log: state.log.concat(status)
			};
		default:
			return state;
	}
}
