var bootstrap = require('react-bootstrap');
var React = require('react');
var Router = require('react-router');
var routerBootstrap = require('react-router-bootstrap');

require('./Navbar.less');

var Navbar = React.createClass({
	render() {
		return (
			<bootstrap.Navbar brand='rPiston' toggleNavKey={0}>
				<bootstrap.CollapsableNav eventKey={0}>
					<bootstrap.Nav navbar>
						<routerBootstrap.NavItemLink to='control'>Control</routerBootstrap.NavItemLink>
						<routerBootstrap.NavItemLink to='record'>Record</routerBootstrap.NavItemLink>
						<routerBootstrap.NavItemLink to='parametricControl'>Parametric</routerBootstrap.NavItemLink>
					</bootstrap.Nav>
					<bootstrap.Nav navbar right>
						<form action='/sign-out' method='post'>
							<bootstrap.Input className='navbar-btn' standalone type='submit' value='Sign out' />
						</form>
					</bootstrap.Nav>
				</bootstrap.CollapsableNav>
			</bootstrap.Navbar>
		);
	}
});

module.exports = Navbar;
