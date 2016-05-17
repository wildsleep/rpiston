import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default class RecordingSaveButton extends Component {
	static propTypes = {
		saveRecording: PropTypes.func.isRequired
	}

	render() {
		const { saveRecording } = this.props;
		return (
			<Button block bsStyle='primary' onClick={saveRecording}>
				<i className='fa fa-save fa-fw' /> Save
			</Button>
		);
	}
}
