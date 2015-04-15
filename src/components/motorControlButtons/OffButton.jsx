var bootstrap = require('react-bootstrap');
var React = require('react');

var Actions = require('../../actions');

var OffButton = React.createClass({
	handleClick() {
		Actions.setMotor(0);
	},

	render() {
		return (
			<bootstrap.Button block onClick={this.handleClick}>
				Off
			</bootstrap.Button>
		);
	}
});

module.exports = OffButton;
