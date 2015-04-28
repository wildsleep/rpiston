var bootstrap = require('react-bootstrap');
var React = require('react');
var util = require('util');

require('./ConnectionLog.less');

var RecordingLog = React.createClass({
	propTypes: {
		log: React.PropTypes.array.isRequired
	},

	render() {
		return (
			<bootstrap.Row>
				<bootstrap.Col xs={12}>
					<pre className='connection-log'>
						{this.props.log.map(item => util.inspect(item)).join('\n')}
					</pre>
				</bootstrap.Col>
			</bootstrap.Row>
		);
	}
});

module.exports = RecordingLog;
