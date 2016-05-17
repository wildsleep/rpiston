import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default class RecordingStopButton extends Component {
	static propTypes = {
		stopRecording: PropTypes.func.isRequired
	}

	render() {
		const { stopRecording } = this.props;
		return (
			<Button block bsStyle='primary' onClick={stopRecording}>
				<i className='fa fa-stop fa-fw' /> Stop
			</Button>
		);
	}
}
