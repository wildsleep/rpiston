import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default class RecordingRecordButton extends Component {
	static propTypes = {
		playbackState: PropTypes.string.isRequired,
		startRecording: PropTypes.func.isRequired
	}

	handleRecord() {
		if (this.recordEnabled()) {
			this.props.startRecording();
		}
	}

	recordEnabled() {
		return this.props.playbackState === 'stopped';
	}
	
	render() {
		const handleRecord = this.handleRecord.bind(this);
		const disabled = !this.recordEnabled();
		return (
			<Button bsStyle='danger' block onClick={handleRecord} disabled={disabled}>
				<i className='fa fa-circle fa-fw' /> Rec
			</Button>
		);
	}
}
