var bootstrap = require('react-bootstrap');
var chroma = require('chroma-js');
var React = require('react');
var socket = require('socket.io-client')();

/*
var motorValue = 0;

$('.io-motor-off').click(function () {
	socket.emit('set-motor', 0);
});

$('.io-motor-n').click(function () {
	var n = parseFloat($(this).data('n'));
	socket.emit('set-motor', n);
});

$('.io-motor-down').click(function () {
	socket.emit('set-motor', Math.max(0, motorValue - 0.05));
});

$('.io-motor-up').click(function () {
	socket.emit('set-motor', Math.min(1, motorValue + 0.05));
});

socket.on('motor', function (value) {
	motorValue = value;
	$('.io-motor-display').css({
		'width': (100 * value) + '%',
		'background-color': barColor(value)
	});
});

*/

var MotorBar = React.createClass({
	propTypes: {
		motorValue: React.PropTypes.number.isRequired
	},
	render() {
		return (
			<div className='row'>
				<div className='col-xs-12'>
					<bootstrap.ProgressBar active now={this.props.motorValue} />
				</div>
			</div>
		);
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
		console.log('Clicked button ' + this.props.value + '/' + this.props.maxValue);
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
		console.log('Clicked button <');
	},
	handleIncrease() {
		console.log('Clicked button >');
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
		console.log('Clicked button OFF');
	}
});

React.render(
	<div className='container'>
		<MotorBar motorValue={12} />
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
