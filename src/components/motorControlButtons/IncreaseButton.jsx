import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default class IncreaseButton extends Component {
	static propTypes = {
		increaseMotor: PropTypes.func.isRequired
	}

	handleClick() {
		this.props.increaseMotor();
	}

	render() {
		return (
			<Button block onClick={this.handleClick.bind(this)}>
				<i className='fa fa-chevron-right' />
			</Button>
		);
	}
}
