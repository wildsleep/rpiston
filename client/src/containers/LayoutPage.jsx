import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { connectionStatusChange } from '../actions/connectionActions';
import { motorUpdated } from '../actions/motorActions';
import Navbar from '../components/Navbar';
import SocketListener from '../components/SocketListener';

function mapStateToProps(state) {
	return { connection: state.connection };
}

function mapDispatchToProps(dispatch) {
	return { actions: bindActionCreators({ connectionStatusChange, motorUpdated }, dispatch) };
}

class LayoutPage extends Component {
	static propTypes = {
		connection: PropTypes.shape({
			status: PropTypes.string.isRequired,
			ok: PropTypes.bool.isRequired
		}).isRequired,
		actions: PropTypes.shape({
			connectionStatusChange: PropTypes.func.isRequired,
			motorUpdated: PropTypes.func.isRequired
		}).isRequired
	}

	render() {
		const { connection, actions, children } = this.props;
		return (
			<React.Fragment>
				<Navbar connectionStatus={connection.status} connectionOk={connection.ok} />
				<div className="container mx-auto">
					{children}
				</div>
				<SocketListener
					connectionStatusChange={actions.connectionStatusChange}
					motorUpdated={actions.motorUpdated}/>
			</React.Fragment>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutPage);
