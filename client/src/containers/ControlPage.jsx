import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as motorActions from '../actions/motorActions';
import MotorBar from '../components/MotorBar';
import MotorControlButtons from '../components/MotorControlButtons';
import MotorHotkeys from '../components/MotorHotkeys';

function mapStateToProps(state) {
	return { motorValue: state.motor };
}

function mapDispatchToProps(dispatch) {
	return { motorActions: bindActionCreators(motorActions, dispatch) };
}

class ControlPage extends Component {
	static propTypes = {
		motorValue: PropTypes.number.isRequired,
		motorActions: PropTypes.shape({
			setMotor: PropTypes.func.isRequired,
			decreaseMotor: PropTypes.func.isRequired,
			increaseMotor: PropTypes.func.isRequired
		}).isRequired
	}

	render() {
		const { motorValue, motorActions } = this.props;
		return (
			<div>
				<MotorBar motorValue={motorValue} />
				<MotorControlButtons
					setMotor={motorActions.setMotor}
					decreaseMotor={motorActions.decreaseMotor}
					increaseMotor={motorActions.increaseMotor} />
				<MotorHotkeys
					setMotor={motorActions.setMotor}
					decreaseMotor={motorActions.decreaseMotor}
					increaseMotor={motorActions.increaseMotor} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPage);
