var bootstrap = require('react-bootstrap');
var React = require('react');

var Actions = require('../actions');

module.exports = React.createClass({
	render() {
		return (
			<div className='row'>
				<div className='col-xs-12'>
					<bootstrap.Button block onClick={this.handleClick}>
						Off
					</bootstrap.Button>
				</div>
			</div>
		);
	},
	handleClick() {
		Actions.setMotor(0);
	}
});
