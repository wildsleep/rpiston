import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';

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
			<div>
				<Navbar connectionStatus={connection.status} connectionOk={connection.ok} />
				<Grid>
					{children}
				</Grid>
				<SocketListener
					connectionStatusChange={actions.connectionStatusChange}
					motorUpdated={actions.motorUpdated}/>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutPage);
