import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default class NumberButton extends Component {
	static propTypes = {
		setMotor: PropTypes.func.isRequired,
		value: React.PropTypes.number.isRequired,
		maxValue: React.PropTypes.number.isRequired
	}

	handleClick() {
		const { value, maxValue } = this.props;
		this.props.setMotor(value / maxValue);
	}

	render() {
		return (
			<Button block onClick={this.handleClick.bind(this)}>
				{this.props.value}
			</Button>
		);
	}
}
