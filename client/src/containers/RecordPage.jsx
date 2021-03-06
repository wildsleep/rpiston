import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as motorActions from '../actions/motorActions';
import * as recordingActions from '../actions/recordingActions';
import MotorBar from '../components/MotorBar';
import MotorControlButtons from '../components/MotorControlButtons';
import MotorHotkeys from '../components/MotorHotkeys';
import RecordingRecordStopPlayButtons from '../components/RecordingRecordStopPlayButtons';
import RecordingLog from '../components/RecordingLog';
import ScriptedControl from '../components/ScriptedControl';
import RecordingLoadSaveButtons from '../components/RecordingLoadSaveButtons';

function mapStateToProps(state) {
	return {
		motorValue: state.motor,
		playbackState: state.playback,
		recording: state.recording.currentRecording
	};
}

function mapDispatchToProps(dispatch) {
	return {
		motorActions: bindActionCreators(motorActions, dispatch),
		recordingActions: bindActionCreators(recordingActions, dispatch)
	};
}

class RecordPage extends Component {
	render() {
		const { motorValue, playbackState, recording, motorActions, recordingActions } = this.props;
		return (
			<React.Fragment>
				<MotorBar motorValue={motorValue} />
				<MotorControlButtons
					setMotor={motorActions.setMotor}
					increaseMotor={motorActions.increaseMotor}
					decreaseMotor={motorActions.decreaseMotor} />
				<MotorHotkeys
					setMotor={motorActions.setMotor}
					decreaseMotor={motorActions.decreaseMotor}
					increaseMotor={motorActions.increaseMotor} />
				<hr className="mb-4 text-gray-300" />
				<RecordingRecordStopPlayButtons
					startRecording={recordingActions.startRecording}
					stopRecording={recordingActions.stopRecording}
					playRecording={recordingActions.playRecording}
					playbackState={playbackState} />
				<RecordingLog recording={recording} />
				<RecordingLoadSaveButtons
					loadRecording={recordingActions.loadRecording}
					saveRecording={recordingActions.saveRecording} />
				<ScriptedControl
					playbackState={playbackState}
					script={recording}
					setMotor={motorActions.setMotor}
					stopRecording={recordingActions.stopRecording} />
			</React.Fragment>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordPage);
