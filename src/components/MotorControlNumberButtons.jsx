var bootstrap = require('react-bootstrap');
var React = require('react');

var MotorControlNumberButton = require('./MotorControlNumberButton');

module.exports = React.createClass({
	render() {
		return (
			<div className='row'>
				<div className='col-xs-12'>
					<bootstrap.ButtonGroup justified>
						{[1,2,3,4,5,6,7,8].map(function (n) {
							return <MotorControlNumberButton key={n} value={n} maxValue={8} />;
						})}
					</bootstrap.ButtonGroup>
				</div>
			</div>
		);
	}
});
