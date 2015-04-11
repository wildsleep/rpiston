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

React.render(
	<div className='container'>
		<div className='row'>
			<div className='col-xs-12'>
				<bootstrap.ProgressBar active now={12} />
			</div>
		</div>
		<div className='row'>
			<div className='col-xs-12'>
				<bootstrap.ButtonGroup justified>
					{[1,2,3,4,5,6,7,8].map(function (n) {
						return (
							<bootstrap.ButtonGroup>
								<bootstrap.Button>{n}</bootstrap.Button>
							</bootstrap.ButtonGroup>
						);
					})}
				</bootstrap.ButtonGroup>
			</div>
		</div>
		<div className='row'>
			<div className='col-xs-6'>
				<bootstrap.Button block>&lt;</bootstrap.Button>
			</div>
			<div className='col-xs-6'>
				<bootstrap.Button block>&gt;</bootstrap.Button>
			</div>
		</div>
		<div className='row'>
			<div className='col-xs-12'>
				<bootstrap.Button block>Off</bootstrap.Button>
			</div>
		</div>
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
