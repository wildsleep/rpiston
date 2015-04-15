var bootstrap = require('react-bootstrap');
var React = require('react');

var Actions = require('../../actions');

var IncreaseButton = React.createClass({
	handleClick() {
		Actions.increaseMotor();
	},

	render() {
		return (
			<bootstrap.Button block onClick={this.handleClick}>
				<i className='fa fa-chevron-right' />
			</bootstrap.Button>
		);
	}
});

module.exports = IncreaseButton;
