import React, { Component, PropTypes } from 'react';

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

export default class SocketListener extends React.Component {
	static propTypes = {
		connectionStatusChange: PropTypes.func,
		motorUpdated: PropTypes.func
	}

	constructor(props) {
		super(props);
		this.listeners = [];
	}

	addListener(event, fn) {
		this.listeners.push(fn);
		socket.on(event, fn);
	}

	removeAllListeners() {
		let fn;
		while (fn = this.listeners.pop()) {
			socket.removeListener(fn);
		}
	}

	componentDidMount() {
		this.addListener('motor', (value) => this.props.motorUpdated(value));
		connectionStatusEvents.forEach((event) => {
			this.addListener(event, () => this.props.connectionStatusChange(event));
		});
	}

	render() {
		return false;
	}

	componentWillUnmount() {
		this.removeAllListeners();
	}
}
