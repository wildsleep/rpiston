var io = require('socket.io-client');
var socket = io(SOCKET_URL);
module.exports = socket;
