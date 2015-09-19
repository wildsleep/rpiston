import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';

import RecordingStopButton from './recordingButtons/RecordingStopButton';
import RecordingPlayButton from './recordingButtons/RecordingPlayButton';

export default class RecordingStopPlayButtons extends Component {
	static propTypes = {
		stopRecording: PropTypes.func.isRequired,
		playRecording: PropTypes.func.isRequired,
		playbackState: PropTypes.string.isRequired
	}

	render() {
		const { stopRecording, playRecording, playbackState } = this.props;
		return (
			<Row>
				<Col xs={6}>
					<RecordingStopButton stopRecording={stopRecording} />
				</Col>
				<Col xs={6}>
					<RecordingPlayButton playRecording={playRecording} playbackState={playbackState} />
				</Col>
			</Row>
		);
	}
}
