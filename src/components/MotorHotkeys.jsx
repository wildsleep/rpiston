import React, { Component, PropTypes } from 'react';
import { Row, Col, ButtonGroup } from 'react-bootstrap';

import NumberButton from './motorControlButtons/NumberButton';
import DecreaseButton from './motorControlButtons/DecreaseButton';
import IncreaseButton from './motorControlButtons/IncreaseButton';
import OffButton from './motorControlButtons/OffButton';

const ZERO = 48;
const EIGHT = ZERO + 8;
const NUMZERO = 96;
const NUMEIGHT = NUMZERO + 8;
const PLUS = 187;
const MINUS = 189;
const NUMPLUS = 107;
const NUMMINUS = 109;
const SPACE = 32;

export default class MotorControlButtons extends Component {
	static propTypes = {
		setMotor: PropTypes.func.isRequired,
		decreaseMotor: PropTypes.func.isRequired,
		increaseMotor: PropTypes.func.isRequired
	}

	componentDidMount() {
		this.handler = this.handleKeyDown.bind(this);
		document.addEventListener('keydown', this.handler);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handler);
	}

	render() {
		return false;
	}

	handleKeyDown(e) {
		const { setMotor, decreaseMotor, increaseMotor } = this.props;

		if (e.which >= ZERO && e.which <= EIGHT) {
			setMotor((e.which - ZERO) / 8);
		} else if (e.which >= NUMZERO && e.which <= NUMEIGHT) {
			setMotor((e.which - NUMZERO) / 8);
		} else if (e.which === MINUS || e.which === NUMMINUS) {
			decreaseMotor();
		} else if (e.which === PLUS || e.which === NUMPLUS) {
			increaseMotor();
		} else if (e.which === SPACE) {
			setMotor(0);
		} else return;

		e.preventDefault();
	}
}
