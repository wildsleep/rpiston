var mcp4725 = require('./mcp4725');

module.exports = function (server) {
	var io = require('socket.io')(server, {
		pingInterval: 3000,
		pingTimeout: 2000
	});
	var connections = 0;
	var motorValue = 0;

	mcp4725.analogWrite(0, true);

	io.on('connection', function (socket) {
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
		}
	}

	function setMotor(value) {
		console.log('Set motor to %s', value);
		mcp4725.analogWrite(value);
		motorValue = value;
		io.sockets.emit('motor', value);
	}
};

