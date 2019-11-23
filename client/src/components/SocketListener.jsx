import React from 'react';
import PropTypes from 'prop-types';

import socket from '../socket';

const connectionStatusEvents = [
	'connect_error',
	'connect_timeout',
	'reconnect',
	'reconnect_attempt',
	'reconnecting',
	'reconnect_error',
	'reconnect_failed'
];

export default function SocketListener({ connectionStatusChange, motorUpdated }) {
	React.useEffect(() => {
		const listeners = [];

		function addListener(event, fn) {
			listeners.push(fn);
			socket.on(event, fn);
		}

		function removeAllListeners() {
			let fn;
			while (fn = listeners.pop()) {
				socket.removeListener(fn);
			}
		}

		addListener('motor', value => motorUpdated(value));

		connectionStatusEvents.forEach((event) => {
			addListener(event, () => connectionStatusChange(event));
		});

		return () => {
			removeAllListeners();
		}
	}, [connectionStatusChange, motorUpdated]);

	return false;
}

SocketListener.propTypes = {
	connectionStatusChange: PropTypes.func,
	motorUpdated: PropTypes.func
};
