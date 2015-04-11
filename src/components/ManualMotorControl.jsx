var bootstrap = require('react-bootstrap');
var React = require('react');

var MotorBar = require('../components/MotorBar');
var MotorControlNumberButtons = require('../components/MotorControlNumberButtons');
var MotorControlRelativeButtons = require('../components/MotorControlRelativeButtons');
var MotorControlOffButton = require('../components/MotorControlOffButton');

var ManualMotorControl = React.createClass({
	render() {
		return (
			<div>
				<MotorBar />
				<MotorControlNumberButtons />
				<MotorControlRelativeButtons />
				<MotorControlOffButton />
			</div>
		)
	}
});

module.exports = ManualMotorControl;
