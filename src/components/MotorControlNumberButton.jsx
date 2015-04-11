var bootstrap = require('react-bootstrap');
var React = require('react');

var Actions = require('../actions');

module.exports = React.createClass({
	propTypes: {
		value: React.PropTypes.number.isRequired,
		maxValue: React.PropTypes.number.isRequired
	},

	render() {
		return (
			<bootstrap.ButtonGroup>
				<bootstrap.Button onClick={this.handleClick}>
					{this.props.value}
				</bootstrap.Button>
			</bootstrap.ButtonGroup>
		);
	},

	handleClick() {
		Actions.setMotor(this.props.value / this.props.maxValue);
	}
});
