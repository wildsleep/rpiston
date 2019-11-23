import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
			<React.Fragment>
				<h1 className="text-xl mb-4">Connection event log</h1>
				<ConnectionLog log={log} />
			</React.Fragment>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionLogPage);
