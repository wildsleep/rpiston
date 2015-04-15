var React = require('react');
var Router = require('react-router');

var LayoutPage = require('./views/LayoutPage');
var ControlPage = require('./views/ControlPage');
var RecordPage = require('./views/RecordPage');
var ParametricControlPage = require('./views/ParametricControlPage');

module.exports = (
	<Router.Route path='/' handler={LayoutPage}>
		<Router.DefaultRoute name='control' handler={ControlPage} />
		<Router.Route name='record' path='/record' handler={RecordPage} />
		<Router.Route name='parametricControl' path='/parametric' handler={ParametricControlPage} />
	</Router.Route>
);
