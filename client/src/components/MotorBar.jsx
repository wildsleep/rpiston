import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import { interpolate } from 'chroma-js';

import ProgressBar from './ProgressBar';

require('./MotorBar.less');

export default class MotorBar extends Component {
	static propTypes = {
		motorValue: PropTypes.number.isRequired,
	}

	render() {
		const { motorValue } = this.props;
		const barColor = this.barColor(motorValue);
		return (
			<Row>
				<Col xs={12}>
					<ProgressBar min={0} max={1} now={motorValue} color={barColor} />
				</Col>
			</Row>
		);
	}

	barColor(value) {
		const zeroColor = '#158cba';
		const oneColor = '#ff4136';
		if (value < 0.5)
			return zeroColor;
		return interpolate(zeroColor, oneColor, (value - 0.5) * 2, 'lab').hex();
	}
}
