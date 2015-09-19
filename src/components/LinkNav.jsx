import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class LinkNav extends Component {
	render() {
		return (
			<Nav navbar>
				<LinkContainer to='/'>
					<NavItem>Control</NavItem>
				</LinkContainer>
				<LinkContainer to='/record'>
					<NavItem>Record</NavItem>
				</LinkContainer>
				<LinkContainer to='/parametric'>
					<NavItem>Parametric</NavItem>
				</LinkContainer>
			</Nav>
		);
	}
}
