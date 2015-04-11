var bootstrap = require('react-bootstrap');
var chroma = require('chroma-js');
var React = require('react');
var Reflux = require('reflux');

var MotorStore = require('../motorStore');

require('./MotorBar.less');

module.exports = React.createClass({
	mixins: [Reflux.listenTo(MotorStore, 'onMotorChange')],

	getInitialState() {
		return {
			motorValue: 0
		};
	},

	render() {
		return (
			<bootstrap.Row>
				<bootstrap.Col xs={12}>
					<bootstrap.ProgressBar active min={0} max={1} now={this.state.motorValue} />
				</bootstrap.Col>
			</bootstrap.Row>
		);
	},

	componentDidUpdate() {
		var progressBarNode = React.findDOMNode(this).querySelector('.progress-bar');
		progressBarNode.style['backgroundColor'] = barColor(this.state.motorValue);
	},

	onMotorChange(value) {
		this.setState({
			motorValue: value
		});
	}
});

function barColor(value) {
	var zeroColor = '#158cba';
	var oneColor = '#ff4136';
	if (value < 0.5)
		return zeroColor;
	value = (value - 0.5) * 2;
	return chroma.interpolate(zeroColor, oneColor, value, 'lab').hex();
};
