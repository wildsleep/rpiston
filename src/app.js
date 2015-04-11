var socket = require('socket.io-client')();
var chroma = require('chroma-js');

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

function barColor(value) {
	var zeroColor = '#158cba';
	var oneColor = '#ff4136';
	if (value < 0.5)
		return zeroColor;
	value = (value - 0.5) * 2;
	return chroma.interpolate(zeroColor, oneColor, value, 'lab').hex();
};
