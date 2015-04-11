var bootstrap = require('react-bootstrap');
var React = require('react');

var Actions = require('../actions');

module.exports = React.createClass({
	render() {
		return (
			<div className='row'>
				<div className='col-xs-6'>
					<bootstrap.Button block onClick={this.handleDecrease}>
						&lt;
					</bootstrap.Button>
				</div>
				<div className='col-xs-6'>
					<bootstrap.Button block onClick={this.handleIncrease}>
						&gt;
					</bootstrap.Button>
				</div>
			</div>
		);
	},

	handleDecrease() {
		Actions.decreaseMotor();
	},

	handleIncrease() {
		Actions.increaseMotor();
	}
});
