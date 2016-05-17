import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';

import RecordingLoadButton from './recordingButtons/RecordingLoadButton';
import RecordingSaveButton from './recordingButtons/RecordingSaveButton';

export default class RecordingLoadSaveButtons extends Component {
	static propTypes = {
		loadRecording: PropTypes.func.isRequired,
		saveRecording: PropTypes.func.isRequired
	}

	render() {
		const { loadRecording, saveRecording } = this.props;
		return (
			<Row>
				<Col xs={6}>
					<RecordingLoadButton loadRecording={loadRecording} />
				</Col>
				<Col xs={6}>
					<RecordingSaveButton saveRecording={saveRecording} />
				</Col>
			</Row>
		);
	}
}
