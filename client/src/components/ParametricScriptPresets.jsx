import React, { Component, PropTypes } from 'react';
import { Panel, Row, Col, Button } from 'react-bootstrap';

const presets = {
	sine: '0.4 + 0.4*sin(t*PI/3000)',
	square: '(t%3000)/3000 < 0.5 ? 0.75 : 0',
	cosinePulses: '(1-0.9*abs(cos(t*PI/15000)))*(1-0.8*abs(cos(t*PI/450000)))'
};

export default class ParametricScriptPresets extends Component {
	static propTypes = {
		updateParametricScript: PropTypes.func.isRequired
	}

	handleClick(presetName) {
		this.props.updateParametricScript(presets[presetName]);
	}

	render() {
		return (
			<div>
				<Panel header={<h3>Presets</h3>}>
					<Row>
						<Col xs={12} sm={4}>
							<Button block onClick={this.handleClick.bind(this, 'sine')}>Sine</Button>
						</Col>
						<Col xs={12} sm={4}>
							<Button block onClick={this.handleClick.bind(this, 'square')}>Square</Button>
						</Col>
						<Col xs={12} sm={4}>
							<Button block onClick={this.handleClick.bind(this, 'cosinePulses')}>Cosine Pulses</Button>
						</Col>
					</Row>
				</Panel>
			</div>
		);
	}
}
