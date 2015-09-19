import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import { inspect } from 'util';

require('./ConnectionLog.less');

export default class ConnectionLog extends Component {
	static propTypes = {
		log: PropTypes.array.isRequired
	}

	render() {
		return (
			<Row>
				<Col xs={12}>
					<pre className='connection-log'>
						{this.props.log.map(inspect).join('\n')}
					</pre>
				</Col>
			</Row>
		);
	}
}
