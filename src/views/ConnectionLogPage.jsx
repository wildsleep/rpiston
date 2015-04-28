var React = require('react');
var Reflux = require('reflux');

var ConnectionLog = require('../components/ConnectionLog');
var connectionStatusStore = require('../stores/connectionStatusStore');

var ConnectionLogPage = React.createClass({
	mixins: [ Reflux.connect(connectionStatusStore, 'connection') ],

	getInitialState() {
		return {
			connection: connectionStatusStore.getDefaultData()
		};
	},

	render() {
		return (
			<div>
				<h1>Connection event log</h1>
				<ConnectionLog log={this.state.connection.log} />
			</div>
		)
	}
});

module.exports = ConnectionLogPage;
