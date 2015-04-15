var bootstrap = require('react-bootstrap');
var React = require('react');
var Router = require('react-router');

var Navbar = require('../components/Navbar');

var LayoutPage = React.createClass({
	render() {
		return (
			<div>
				<Navbar />
				<bootstrap.Grid>
					<Router.RouteHandler />
				</bootstrap.Grid>
			</div>
		);
	}
});

module.exports = LayoutPage;
