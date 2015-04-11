var React = require('react');

var MotorBar = require('./components/MotorBar');
var MotorControlNumberButtons = require('./components/MotorControlNumberButtons');
var MotorControlRelativeButtons = require('./components/MotorControlRelativeButtons');
var MotorControlOffButton = require('./components/MotorControlOffButton');

require('./main.less');

React.render(
	<div className='container'>
		<MotorBar />
		<MotorControlNumberButtons />
		<MotorControlRelativeButtons />
		<MotorControlOffButton />
	</div>,
	document.getElementById('app')
);
