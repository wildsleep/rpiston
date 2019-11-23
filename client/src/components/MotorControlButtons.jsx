import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function MotorControlButtons({ setMotor, decreaseMotor, increaseMotor }) {
	return (
		<React.Fragment>
			<div className="flex mb-4">
				{[1,2,3,4,5,6,7,8].map(n => (
					<button key={n} className="button btn-grouped flex-1" onClick={() => setMotor(n / 8)}>
						{n}
					</button>
				))}
			</div>
			<div className="flex -mx-4 mb-4">
				<button className="button flex-1 mx-4" onClick={decreaseMotor}>
					<FontAwesomeIcon icon={faChevronLeft} />
				</button>
				<button className="button flex-1 mx-4" onClick={increaseMotor}>
					<FontAwesomeIcon icon={faChevronRight} />
				</button>
			</div>
			<div className="flex -mx-4 mb-4">
				<button className="button flex-1 mx-4" onClick={() => setMotor(0)}>
					Off
				</button>
			</div>
		</React.Fragment>
	);
}

MotorControlButtons.propTypes = {
	setMotor: PropTypes.func.isRequired,
	decreaseMotor: PropTypes.func.isRequired,
	increaseMotor: PropTypes.func.isRequired
};
