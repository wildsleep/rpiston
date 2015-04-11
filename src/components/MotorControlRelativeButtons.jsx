var bootstrap = require('react-bootstrap');
var React = require('react');

var Actions = require('../actions');

module.exports = React.createClass({
	render() {
		return (
			<bootstrap.Row>
				<bootstrap.Col xs={6}>
					<bootstrap.Button block onClick={this.handleDecrease}>
						<i className='fa fa-chevron-left' />
					</bootstrap.Button>
				</bootstrap.Col>
				<bootstrap.Col xs={6}>
					<bootstrap.Button block onClick={this.handleIncrease}>
						<i className='fa fa-chevron-right' />
					</bootstrap.Button>
				</bootstrap.Col>
			</bootstrap.Row>
		);
	},

	handleDecrease() {
		Actions.decreaseMotor();
	},

	handleIncrease() {
		Actions.increaseMotor();
	}
});
