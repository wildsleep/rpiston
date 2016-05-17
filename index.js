var tessel = require('./tessel');
tessel.redLed('on');

var auth = require('http-auth');
var fs = require('fs');
var http = require('http');
var path = require('path');
var router = require('tiny-router');

var EPSILON = 0.0001;
var motorConfig = {
	minDeadZone: 0.075
};

var basicAuth = auth.basic({
	file: path.join(__dirname, 'htpasswd')
});
router
	.use(auth.connect(basicAuth))
	.use('static', { path: path.join(__dirname, 'public') })
	.get('/*', function (req, res) {
		fs.readFile('public/index.html', function (err, file) {
			res.send(file);
		});
	});

console.log('Starting rPiston server...');
var server = http.createServer(router.Router()).listen(3000);
server.on('listening', function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('rPiston server listening at http://%s:%s', host, port);
	tessel.redLed('off');
});

var io = require('socket.io')(server, {
	pingInterval: 3000,
	pingTimeout: 2000
});

var connections = 0;
var motorValue = 0;

setMotor(0);

io.on('connection', function (socket) {
	tessel.greenLed('on');
	++connections;
	console.log('Connection established (total: %s)', connections);
	socket.on('disconnect', disconnect);
	socket.on('set-motor', setMotor);
	socket.emit('motor', motorValue);
});

function disconnect() {
	--connections;
	console.log('Connection terminated (remaining: %s)', connections);
	if (connections === 0) {
		console.log('No remaining connections, killing motor');
		setMotor(0);
		tessel.greenLed('off');
	}
}

function setMotor(value) {
	var adjustedValue = (value < EPSILON) ? 0 :
		motorConfig.minDeadZone + (value * (1 - motorConfig.minDeadZone));

	console.log('Set motor to %s (adjusted: %s)', value, adjustedValue);
	tessel.analogWrite(adjustedValue);
	tessel.blueLed('toggle');
	motorValue = value;
	io.sockets.emit('motor', value);
}
