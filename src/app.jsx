var bootstrap = require('react-bootstrap');
var chroma = require('chroma-js');
var io = require('socket.io-client');
var React = require('react');
var Reflux = require('reflux');

var Actions = Reflux.createActions([
	'setMotor',
	'decreaseMotor',
	'increaseMotor'
]);

var motorStore = Reflux.createStore({
	listenables: Actions,

	init() {
		this.value = 0;
		this.increment = 0.05;

		this.socket = io();
		this.socket.on('motor', this.updateValue.bind(this));
	},

	updateValue(value) {
		this.value = value;
		this.trigger(this.value);
	},

	onSetMotor(value) {
		this.socket.emit('set-motor', value);
	},

	onDecreaseMotor() {
		this.socket.emit('set-motor', Math.max(0, this.value - this.increment));
	},

	onIncreaseMotor() {
		this.socket.emit('set-motor', Math.min(1, this.value + this.increment));
	}
});

var MotorBar = React.createClass({
	mixins: [Reflux.listenTo(motorStore, 'onMotorChange')],

	render() {
		return (
			<div className='row'>
				<div className='col-xs-12'>
					<bootstrap.ProgressBar active min={0} max={1} now={this.state.motorValue} />
				</div>
			</div>
		);
	},

	getInitialState() {
		return {
			motorValue: 0
		};
	},

	onMotorChange(value) {
		this.setState({
			motorValue: value
		});
	}
});

var MotorControlNumberButton = React.createClass({
	propTypes: {
		value: React.PropTypes.number.isRequired,
		maxValue: React.PropTypes.number.isRequired
	},

	render() {
		return (
			<bootstrap.ButtonGroup>
				<bootstrap.Button onClick={this.handleClick}>
					{this.props.value}
				</bootstrap.Button>
			</bootstrap.ButtonGroup>
		);
	},

	handleClick() {
		Actions.setMotor(this.props.value / this.props.maxValue);
	}
});

var MotorControlNumberButtons = React.createClass({
	render() {
		return (
			<div className='row'>
				<div className='col-xs-12'>
					<bootstrap.ButtonGroup justified>
						{[1,2,3,4,5,6,7,8].map(function (n) {
							return <MotorControlNumberButton key={n} value={n} maxValue={8} />;
						})}
					</bootstrap.ButtonGroup>
				</div>
			</div>
		);
	}
});

var MotorControlRelativeButtons = React.createClass({
	render() {
		return (
			<div className='row'>
				<div className='col-xs-6'>
					<bootstrap.Button block onClick={this.handleDecrease}>
						&lt;
					</bootstrap.Button>
				</div>
				<div className='col-xs-6'>
					<bootstrap.Button block onClick={this.handleIncrease}>
						&gt;
					</bootstrap.Button>
				</div>
			</div>
		);
	},

	handleDecrease() {
		Actions.decreaseMotor();
	},

	handleIncrease() {
		Actions.increaseMotor();
	}
});

var MotorControlOffButton = React.createClass({
	render() {
		return (
			<div className='row'>
				<div className='col-xs-12'>
					<bootstrap.Button block onClick={this.handleClick}>
						Off
					</bootstrap.Button>
				</div>
			</div>
		);
	},
	handleClick() {
		Actions.setMotor(0);
	}
});

React.render(
	<div className='container'>
		<MotorBar />
		<MotorControlNumberButtons />
		<MotorControlRelativeButtons />
		<MotorControlOffButton />
	</div>,
	document.getElementById('app')
);

function barColor(value) {
	var zeroColor = '#158cba';
	var oneColor = '#ff4136';
	if (value < 0.5)
		return zeroColor;
	value = (value - 0.5) * 2;
	return chroma.interpolate(zeroColor, oneColor, value, 'lab').hex();
};
