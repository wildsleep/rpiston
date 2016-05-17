import * as ActionTypes from '../constants/ActionTypes';
import ParametricScript from '../models/ParametricScript';

const defaultParametricScript = new ParametricScript();

export default function parametricScript(state = defaultParametricScript, action) {
	switch (action.type) {
		case ActionTypes.UPDATE_PARAMETRIC_SCRIPT:
			return new ParametricScript(action.script);
		default:
			return state;
	}
}
