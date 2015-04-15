var bootstrap = require('react-bootstrap');
var React = require('react');
var Router = require('react-router');

var LayoutPage = React.createClass({
	render() {
		return (
			<div>
				<bootstrap.Navbar brand='rPiston' toggleNavKey={0}>
					<bootstrap.Nav right eventKey={0}>
						<form action='/sign-out' method='post'>
							<bootstrap.Input className='navbar-btn' standalone type='submit' value='Sign out' />
						</form>
					</bootstrap.Nav>
				</bootstrap.Navbar>
				<bootstrap.Grid>
					<Router.RouteHandler />
				</bootstrap.Grid>
			</div>
		);
	}
});

module.exports = LayoutPage;
