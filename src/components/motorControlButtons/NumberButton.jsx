var bootstrap = require('react-bootstrap');
var React = require('react');

var Actions = require('../../actions');

var MotorControlNumberButton = React.createClass({
	propTypes: {
		value: React.PropTypes.number.isRequired,
		maxValue: React.PropTypes.number.isRequired
	},

	handleClick() {
		Actions.setMotor(this.props.value / this.props.maxValue);
	},

	render() {
		return (
			<bootstrap.Button onClick={this.handleClick}>
				{this.props.value}
			</bootstrap.Button>
		);
	}
});

module.exports = MotorControlNumberButton;
