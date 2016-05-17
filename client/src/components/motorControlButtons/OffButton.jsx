import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default class OffButton extends Component {
	static propTypes = {
		setMotor: PropTypes.func.isRequired
	}

	handleClick() {
		this.props.setMotor(0);
	}

	render() {
		return (
			<Button block onClick={this.handleClick.bind(this)}>
				Off
			</Button>
		);
	}
}
