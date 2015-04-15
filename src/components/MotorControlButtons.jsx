var bootstrap = require('react-bootstrap');
var React = require('react');

var NumberButton = require('./motorControlButtons/NumberButton');
var DecreaseButton = require('./motorControlButtons/DecreaseButton');
var IncreaseButton = require('./motorControlButtons/IncreaseButton');
var OffButton = require('./motorControlButtons/OffButton');

var MotorControlButtons = React.createClass({
	render() {
		return (
			<div>
				<bootstrap.Row>
					<bootstrap.Col xs={12}>
						<bootstrap.ButtonGroup justified>
							{[1,2,3,4,5,6,7,8].map((n) => {
								return (
									<bootstrap.ButtonGroup key={n}>
										<NumberButton value={n} maxValue={8} />
									</bootstrap.ButtonGroup>
								);
							})}
						</bootstrap.ButtonGroup>
					</bootstrap.Col>
				</bootstrap.Row>
				<bootstrap.Row>
					<bootstrap.Col xs={6}>
						<DecreaseButton />
					</bootstrap.Col>
					<bootstrap.Col xs={6}>
						<IncreaseButton />
					</bootstrap.Col>
				</bootstrap.Row>
				<bootstrap.Row>
					<bootstrap.Col xs={12}>
						<OffButton />
					</bootstrap.Col>
				</bootstrap.Row>
			</div>	
		);
	}
});

module.exports = MotorControlButtons;