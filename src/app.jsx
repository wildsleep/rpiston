var React = require('react');
var Router = require('react-router');

var routes = require('./routes');
require('./main.less');

Router.run(routes, Router.HistoryLocation, (Handler) => {
	React.render(<Handler />, document.getElementById('app'));
});
