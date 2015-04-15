var bootstrap = require('react-bootstrap');
var React = require('react');
var Router = require('react-router');
var routerBootstrap = require('react-router-bootstrap');

var LinkNav = require('./LinkNav');
var SignOutNav = require('./SignOutNav');
require('./Navbar.less');

var Navbar = React.createClass({
	render() {
		return (
			<bootstrap.Navbar brand='rPiston' toggleNavKey={'toggleNav'}>
				<bootstrap.CollapsableNav eventKey={'toggleNav'}>
					<LinkNav />
					<SignOutNav />
				</bootstrap.CollapsableNav>
			</bootstrap.Navbar>
		);
	}
});

module.exports = Navbar;
