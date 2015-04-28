var bootstrap = require('react-bootstrap');
var React = require('react');
var Router = require('react-router');
var routerBootstrap = require('react-router-bootstrap');

var LinkNav = require('./LinkNav');
var SignOutNav = require('./SignOutNav');
require('./Navbar.less');

var Navbar = React.createClass({
	propTypes: {
		connectionStatus: React.PropTypes.string.isRequired,
		connectionOk: React.PropTypes.bool.isRequired
	},

	render() {
		return (
			<bootstrap.Navbar brand='rPiston' toggleNavKey={'toggleNav'}>
				<bootstrap.CollapsableNav eventKey={'toggleNav'}>
					<LinkNav />
					<SignOutNav status={this.props.connectionStatus} ok={this.props.connectionOk} />
				</bootstrap.CollapsableNav>
			</bootstrap.Navbar>
		);
	}
});

module.exports = Navbar;
