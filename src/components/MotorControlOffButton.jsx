var bootstrap = require('react-bootstrap');
var React = require('react');

var Actions = require('../actions');

module.exports = React.createClass({
	render() {
		return (
			<bootstrap.Row>
				<bootstrap.Col xs={12}>
					<bootstrap.Button block onClick={this.handleClick}>
						Off
					</bootstrap.Button>
				</bootstrap.Col>
			</bootstrap.Row>
		);
	},
	handleClick() {
		Actions.setMotor(0);
	}
});
