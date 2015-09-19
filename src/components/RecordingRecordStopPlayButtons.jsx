import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';

import RecordingRecordButton from './recordingButtons/RecordingRecordButton';
import RecordingStopButton from './recordingButtons/RecordingStopButton';
import RecordingPlayButton from './recordingButtons/RecordingPlayButton';

export default class RecordingRecordStopPlayButtons extends Component {
	static propTypes = {
		startRecording: PropTypes.func.isRequired,
		stopRecording: PropTypes.func.isRequired,
		playRecording: PropTypes.func.isRequired,
		playbackState: PropTypes.string.isRequired
	}

	render() {
		const { startRecording, stopRecording, playRecording, playbackState } = this.props;
		return (
			<Row>
				<Col xs={4}>
					<RecordingRecordButton startRecording={startRecording} playbackState={playbackState} />
				</Col>
				<Col xs={4}>
					<RecordingStopButton stopRecording={stopRecording} />
				</Col>
				<Col xs={4}>
					<RecordingPlayButton playRecording={playRecording} playbackState={playbackState} />
				</Col>
			</Row>
		);
	}
}
