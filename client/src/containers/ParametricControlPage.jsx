import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as motorActions from '../actions/motorActions';
import * as parametricScriptActions from '../actions/parametricScriptActions';
import * as recordingActions from '../actions/recordingActions';
import MotorBar from '../components/MotorBar';
import RecordingStopPlayButtons from '../components/RecordingStopPlayButtons';
import ParametricScriptEditor from '../components/ParametricScriptEditor';
import ParametricScriptPresets from '../components/ParametricScriptPresets';
import ScriptedControl from '../components/ScriptedControl';

function mapStateToProps(state) {
	return {
		motorValue: state.motor,
		playbackState: state.playback,
		parametricScript: state.parametricScript
	};
}

function mapDispatchToProps(dispatch) {
	return {
		motorActions: bindActionCreators(motorActions, dispatch),
		parametricScriptActions: bindActionCreators(parametricScriptActions, dispatch),
		recordingActions: bindActionCreators(recordingActions, dispatch)
	};
}

class ParametricControlPage extends Component {
	render() {
		const { motorValue, playbackState, parametricScript, motorActions, parametricScriptActions, recordingActions } = this.props;
		return (
			<div>
				<MotorBar motorValue={motorValue} />
				<hr />
				<RecordingStopPlayButtons
					stopRecording={recordingActions.stopRecording}
					playRecording={recordingActions.playRecording}
					playbackState={playbackState} />
				<ParametricScriptEditor
					script={parametricScript}
					updateParametricScript={parametricScriptActions.updateParametricScript} />
				<ParametricScriptPresets
					updateParametricScript={parametricScriptActions.updateParametricScript} />
				<ScriptedControl
					playbackState={playbackState}
					script={parametricScript}
					stopRecording={recordingActions.stopRecording}
					setMotor={motorActions.setMotor} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ParametricControlPage);
