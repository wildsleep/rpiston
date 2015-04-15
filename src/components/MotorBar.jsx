var bootstrap = require('react-bootstrap');
var chroma = require('chroma-js');
var React = require('react');
var Reflux = require('reflux');

var ProgressBar = require('./ProgressBar');
require('./MotorBar.less');

var MotorBar = React.createClass({
	propTypes: {
		motorValue: React.PropTypes.number.isRequired,
	},

	render() {
		return (
			<bootstrap.Row>
				<bootstrap.Col xs={12}>
					<ProgressBar min={0} max={1} now={this.props.motorValue} color={this.barColor()} />
				</bootstrap.Col>
			</bootstrap.Row>
		);
	},

	barColor() {
		var value = this.props.motorValue;
		var zeroColor = '#158cba';
		var oneColor = '#ff4136';
		if (value < 0.5)
			return zeroColor;
		value = (value - 0.5) * 2;
		return chroma.interpolate(zeroColor, oneColor, value, 'lab').hex();
	}
});

module.exports = MotorBar;
