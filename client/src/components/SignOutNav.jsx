import React, { Component, PropTypes } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import ConnectionStatusIndicator from './ConnectionStatusIndicator';

export default class SignOutNav extends Component {
	static propTypes = {
		status: PropTypes.string.isRequired,
		ok: PropTypes.bool.isRequired
	}

	render() {
		const { status, ok } = this.props;
		return (
			<Nav navbar right>
				<LinkContainer to='/connectionLog'>
					<NavItem>
						<ConnectionStatusIndicator status={status} ok={ok} />
					</NavItem>
				</LinkContainer>
			</Nav>
		);
	}
}
