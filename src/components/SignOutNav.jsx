var bootstrap = require('react-bootstrap');
var React = require('react');
var routerBootstrap = require('react-router-bootstrap');

var ConnectionStatusIndicator = require('./ConnectionStatusIndicator');

var SignOutNav = React.createClass({
	propTypes: {
		status: React.PropTypes.string.isRequired,
		ok: React.PropTypes.bool.isRequired
	},

	handleSignOut(e) {
		e.target.closest('form').submit();
	},

	render() {
		return (
			<form action='/sign-out' method='post'>
				<bootstrap.Nav navbar right>
					<routerBootstrap.NavItemLink to='connectionLog'>
						<ConnectionStatusIndicator status={this.props.status} ok={this.props.ok} />
					</routerBootstrap.NavItemLink>
					<bootstrap.NavItem onClick={this.handleSignOut}>Sign out</bootstrap.NavItem>
				</bootstrap.Nav>
			</form>
		);
	}
});

module.exports = SignOutNav;
