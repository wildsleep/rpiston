import React, { Component, PropTypes } from 'react';

export default class ProgressBar extends Component {
	static propTypes = {
		min: PropTypes.number.isRequired,
		max: PropTypes.number.isRequired,
		now: PropTypes.number.isRequired,
		color: PropTypes.string
	}

	calculateWidth() {
		const { now, min, max } = this.props;
		return (100 * (now - min) / (max - min)) + '%';
	}

	style() {
		const result = {
			width: this.calculateWidth()
		};

		if (this.props.color)
			result.backgroundColor = this.props.color;

		return result;
	}

	render() {
		const style = this.style();
		return (
			<div className='progress progress-striped active'>
				<div className='progress-bar' role='progressbar' style={style} />
			</div>
		);
	}
}
