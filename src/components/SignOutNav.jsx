import React, { Component, PropTypes } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import ConnectionStatusIndicator from './ConnectionStatusIndicator';

export default class SignOutNav extends Component {
	static propTypes = {
		status: PropTypes.string.isRequired,
		ok: PropTypes.bool.isRequired
	}

	handleSignOut(e) {
		e.target.closest('form').submit();
	}

	render() {
		const { status, ok } = this.props;
		return (
			<form action='/sign-out' method='post'>
				<Nav navbar right>
					<LinkContainer to='/connectionLog'>
						<NavItem>
							<ConnectionStatusIndicator status={status} ok={ok} />
						</NavItem>
					</LinkContainer>
					<NavItem onClick={this.handleSignOut}>Sign out</NavItem>
				</Nav>
			</form>
		);
	}
}
