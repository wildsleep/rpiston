var React = require('react');
var Router = require('react-router');

var ControlPage = require('./views/ControlPage');
var RecordPage = require('./views/RecordPage');

module.exports = (
	<Router.Route path='/'>
		<Router.DefaultRoute handler={ControlPage} />
		<Router.Route path='/record' handler={RecordPage} />
	</Router.Route>
);
