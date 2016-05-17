import React, { Component, PropTypes } from 'react';
import { Navbar as BootstrapNavbar, CollapsibleNav } from 'react-bootstrap';

import LinkNav from './LinkNav';
import SignOutNav from './SignOutNav';

require('./Navbar.less');

export default class Navbar extends Component {
	static propTypes = {
		connectionStatus: PropTypes.string.isRequired,
		connectionOk: PropTypes.bool.isRequired
	}

	render() {
		const { connectionStatus, connectionOk } = this.props;
		return (
			<BootstrapNavbar brand='rPiston' toggleNavKey={'toggleNav'}>
				<CollapsibleNav eventKey={'toggleNav'}>
					<LinkNav />
					<SignOutNav status={connectionStatus} ok={connectionOk} />
				</CollapsibleNav>
			</BootstrapNavbar>
		);
	}
}
