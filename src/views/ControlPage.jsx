var React = require('react');

var ManualMotorControl = require('../components/ManualMotorControl');

var ControlPage = React.createClass({
	render() {
		return (
			<ManualMotorControl />
		)
	}
});

module.exports = ControlPage;
