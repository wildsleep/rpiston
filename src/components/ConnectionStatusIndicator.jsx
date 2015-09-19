import React, { Component, PropTypes } from 'react';

require('./ConnectionStatusIndicator.less');

export default class ConnectionStatusIndicator extends Component {
	static propTypes = {
		status: PropTypes.string.isRequired,
		ok: PropTypes.bool.isRequired
	}

	render() {
		const className = this.props.ok ? 'connection-ok' : 'connection-error';
		return (
			<span className={className}>{this.props.status}</span>
		);
	}
}
