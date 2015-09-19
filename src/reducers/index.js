import { combineReducers } from 'redux';

import connection from './connection';
import motor from './motor';
import parametricScript from './parametricScript';
import playback from './playback';
import recording from './recording';

const rootReducer = combineReducers({
	connection,
	motor,
	parametricScript,
	playback,
	recording
});
export default rootReducer;
