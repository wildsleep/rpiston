import * as ActionTypes from '../constants/ActionTypes';

export function updateParametricScript(script) {
	return { type: ActionTypes.UPDATE_PARAMETRIC_SCRIPT, script };
}
