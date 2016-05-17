import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ConnectionLog from '../components/ConnectionLog';

function mapStateToProps(state) {
	return {
		log: state.connection.log
	};
}

function mapDispatchToProps(dispatch) {
	return { motorActions: bindActionCreators({}, dispatch) };
}

class ConnectionLogPage extends Component {
	render() {
		const { log } = this.props;
		return (
			<div>
				<h1>Connection event log</h1>
				<ConnectionLog log={log} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionLogPage);
