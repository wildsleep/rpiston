var bootstrap = require('react-bootstrap');
var React = require('react');

var Actions = require('../../actions');

var DecreaseButton = React.createClass({
	handleClick() {
		Actions.decreaseMotor();
	},

	render() {
		return (
			<bootstrap.Button block onClick={this.handleClick}>
				<i className='fa fa-chevron-left' />
			</bootstrap.Button>
		);
	}
});

module.exports = DecreaseButton;
