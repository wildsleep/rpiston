import React from 'react';
import PropTypes from 'prop-types';
import { interpolate } from 'chroma-js';

function barColor(value) {
	const zeroColor = '#158cba';
	const oneColor = '#ff4136';
	if (value < 0.5)
		return zeroColor;
	return interpolate(zeroColor, oneColor, (value - 0.5) * 2, 'lab').hex();
}

export default function MotorBar({ motorValue }) {
	const style = {
		width: `${100 * motorValue}%`,
		backgroundColor: barColor(motorValue)
	};

	return (
		<div className='bg-gray-100 w-full h-8 mb-4 border-gray-100 shadow-inner overflow-hidden rounded'>
			<div className='progress-bar striped h-full' role='progressbar' style={style} />
		</div>
	);
}

MotorBar.propTypes = {
	motorValue: PropTypes.number.isRequired,
};
