var React = require('react');
var Router = require('react-router');

var ControlPage = require('./views/ControlPage');

module.exports = (
	<Router.Route path='/'>
		<Router.DefaultRoute handler={ControlPage} />
	</Router.Route>
);
