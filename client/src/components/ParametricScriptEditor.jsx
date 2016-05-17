import React, { Component, PropTypes } from 'react';
import { Row, Col, Input } from 'react-bootstrap';

import ParametricScript from '../models/ParametricScript';

export default class ParametricScriptEditor extends Component {
	static propTypes = {
		script: PropTypes.instanceOf(ParametricScript).isRequired,
		updateParametricScript: PropTypes.func.isRequired
	}

	validationState() {
		return this.props.script.isValid ? null : 'error';
	}

	handleChange(e) {
		const newScript = e.target.value;
		this.props.updateParametricScript(newScript);
	}

	render() {
		const scriptText = this.props.script.toText();
		const handleChange = this.handleChange.bind(this);
		const bsStyle = this.validationState();
		return (
			<Row>
				<Col xs={12}>
					<Input type='textarea'
						standalone
						value={scriptText}
						placeholder='abs(sin(t/1000))'
						bsStyle={bsStyle}
						onChange={handleChange} />
				</Col>
			</Row>
		);
	}
}
