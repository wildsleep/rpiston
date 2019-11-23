import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ConnectionStatusIndicator from './ConnectionStatusIndicator';

export default function Navbar({ connectionStatus, connectionOk }) {
	return (
		<nav className="bg-gray-100 border-b-4 border-gray-200 mb-4">
			<div className="container flex">
				<div className="nav-item text-xl hidden lg:block">rPiston</div>
				<div className="flex-1 flex">
					<Link className="nav-item" to='/'>Control</Link>
					<Link className="nav-item" to='/record'>Record</Link>
					<Link className="nav-item" to='/parametric'>Parametric</Link>
				</div>
				<div className="flex">
					<Link className="nav-item" to='/connectionLog'>
						<ConnectionStatusIndicator status={connectionStatus} ok={connectionOk} />
					</Link>
				</div>
			</div>
		</nav>
	);
}

Navbar.propTypes = {
	connectionStatus: PropTypes.string.isRequired,
	connectionOk: PropTypes.bool.isRequired
};
