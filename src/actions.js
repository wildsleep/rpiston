var Reflux = require('reflux');

module.exports = Reflux.createActions([
	'setMotor',
	'decreaseMotor',
	'increaseMotor',
	'startRecording',
	'stopRecording',
	'playRecording'
]);
