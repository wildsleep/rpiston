var bootstrap = require('react-bootstrap');
var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');

var Navbar = require('../components/Navbar');
var connectionStatusStore = require('../stores/connectionStatusStore');

var LayoutPage = React.createClass({
	mixins: [ Reflux.connect(connectionStatusStore, 'connection') ],

	getInitialState() {
		return {
			connection: connectionStatusStore.getDefaultData()
		};
	},

	render() {
		return (
			<div>
				<Navbar connectionStatus={this.state.connection.status} connectionOk={this.state.connection.ok} />
				<bootstrap.Grid>
					<Router.RouteHandler />
				</bootstrap.Grid>
			</div>
		);
	}
});

module.exports = LayoutPage;
