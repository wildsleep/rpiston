var React = require('react');

require('./ConnectionStatusIndicator.less');

var ConnectionStatusIndicator = React.createClass({
	propTypes: {
		status: React.PropTypes.string.isRequired,
		ok: React.PropTypes.bool.isRequired
	},

	render() {
		var className = this.props.ok ? 'connection-ok' : 'connection-error';
		return (
			<span className={className}>{this.props.status}</span>
		);
	}
});

module.exports = ConnectionStatusIndicator;
