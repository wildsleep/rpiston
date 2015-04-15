var bootstrap = require('react-bootstrap');
var React = require('react');
var routerBootstrap = require('react-router-bootstrap');

var LinkNav = React.createClass({
	render() {
		return (
			<bootstrap.Nav navbar>
				<routerBootstrap.NavItemLink to='control'>Control</routerBootstrap.NavItemLink>
				<routerBootstrap.NavItemLink to='record'>Record</routerBootstrap.NavItemLink>
				<routerBootstrap.NavItemLink to='parametricControl'>Parametric</routerBootstrap.NavItemLink>
			</bootstrap.Nav>
		);
	}
});

module.exports = LinkNav;
