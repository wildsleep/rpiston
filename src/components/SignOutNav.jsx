var bootstrap = require('react-bootstrap');
var React = require('react');

var SignOutNav = React.createClass({
	handleSignOut(e) {
		e.target.closest('form').submit();
	},

	render() {
		return (
			<form action='/sign-out' method='post'>
				<bootstrap.Nav navbar right>
					<bootstrap.NavItem onClick={this.handleSignOut}>Sign out</bootstrap.NavItem>
				</bootstrap.Nav>
			</form>
		);
	}
});

module.exports = SignOutNav;
