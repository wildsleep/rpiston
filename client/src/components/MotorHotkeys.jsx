import React from 'react';
import PropTypes from 'prop-types';

const ZERO = 48;
const EIGHT = ZERO + 8;
const NUMZERO = 96;
const NUMEIGHT = NUMZERO + 8;
const PLUS = 187;
const MINUS = 189;
const NUMPLUS = 107;
const NUMMINUS = 109;
const SPACE = 32;

export default function MotorControlButtons({ setMotor, decreaseMotor, increaseMotor }) {
	function handleKeyDown(e) {
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

	React.useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return false;

}

MotorControlButtons.propTypes = {
	setMotor: PropTypes.func.isRequired,
	decreaseMotor: PropTypes.func.isRequired,
	increaseMotor: PropTypes.func.isRequired
}
