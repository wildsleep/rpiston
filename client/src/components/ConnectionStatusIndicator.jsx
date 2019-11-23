import React from 'react';
import PropTypes from 'prop-types';

export default function ConnectionStatusIndicator({ ok, status }) {
	const className = ok ? 'text-green' : 'text-red';
	return (
		<span className={className}>{status}</span>
	);
}

ConnectionStatusIndicator.propTypes = {
	status: PropTypes.string.isRequired,
	ok: PropTypes.bool.isRequired
};
