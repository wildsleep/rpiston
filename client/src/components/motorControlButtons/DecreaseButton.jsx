import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default class DecreaseButton extends Component {
	static propTypes = {
		decreaseMotor: PropTypes.func.isRequired
	}

	handleClick() {
		this.props.decreaseMotor();
	}

	render() {
		return (
			<Button block onClick={this.handleClick.bind(this)}>
				<i className='fa fa-chevron-left' />
			</Button>
		);
	}
}
