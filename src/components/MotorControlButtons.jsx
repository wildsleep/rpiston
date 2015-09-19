import React, { Component, PropTypes } from 'react';
import { Row, Col, ButtonGroup } from 'react-bootstrap';

import NumberButton from './motorControlButtons/NumberButton';
import DecreaseButton from './motorControlButtons/DecreaseButton';
import IncreaseButton from './motorControlButtons/IncreaseButton';
import OffButton from './motorControlButtons/OffButton';

export default class MotorControlButtons extends Component {
	static propTypes = {
		setMotor: PropTypes.func.isRequired,
		decreaseMotor: PropTypes.func.isRequired,
		increaseMotor: PropTypes.func.isRequired
	}

	render() {
		const { setMotor, decreaseMotor, increaseMotor } = this.props;
		return (
			<div>
				<Row>
					<Col xs={12}>
						<ButtonGroup justified>
							{[1,2,3,4,5,6,7,8].map((n) => {
								return (
									<ButtonGroup key={n}>
										<NumberButton value={n} maxValue={8} setMotor={setMotor} />
									</ButtonGroup>
								);
							})}
						</ButtonGroup>
					</Col>
				</Row>
				<Row>
					<Col xs={6}>
						<DecreaseButton decreaseMotor={decreaseMotor} />
					</Col>
					<Col xs={6}>
						<IncreaseButton increaseMotor={increaseMotor} />
					</Col>
				</Row>
				<Row>
					<Col xs={12}>
						<OffButton setMotor={setMotor} />
					</Col>
				</Row>
			</div>	
		);
	}
}
