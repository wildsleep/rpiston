var bootstrap = require('react-bootstrap');
var React = require('react');

var Actions = require('../actions');

var presets = {
	sine: '0.4 + 0.4*sin(t*PI/3000)',
	square: '(t%3000)/3000 < 0.5 ? 0.75 : 0',
	cosinePulses: '(1-0.9*abs(cos(t*PI/15000)))*(1-0.8*abs(cos(t*PI/450000)))'
};

var ParametricScriptPresets = React.createClass({
	handleClick(presetName) {
		Actions.updateParametricScript(presets[presetName]);
	},

	render() {
		return (
			<div>
				<bootstrap.Panel header={<h3>Presets</h3>}>
					<bootstrap.Row>
						<bootstrap.Col xs={12} sm={4}>
							<bootstrap.Button block onClick={this.handleClick.bind(this, 'sine')}>Sine</bootstrap.Button>
						</bootstrap.Col>
						<bootstrap.Col xs={12} sm={4}>
							<bootstrap.Button block onClick={this.handleClick.bind(this, 'square')}>Square</bootstrap.Button>
						</bootstrap.Col>
						<bootstrap.Col xs={12} sm={4}>
							<bootstrap.Button block onClick={this.handleClick.bind(this, 'cosinePulses')}>Cosine Pulses</bootstrap.Button>
						</bootstrap.Col>
					</bootstrap.Row>
				</bootstrap.Panel>
			</div>
		);
	}
});

module.exports = ParametricScriptPresets;
