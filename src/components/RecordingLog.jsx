import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';

import Recording from '../models/Recording';

require('./RecordingLog.less');

export default class RecordingLog extends Component {
	static propTypes = {
		recording: React.PropTypes.instanceOf(Recording).isRequired
	}

	render() {
		return (
			<Row>
				<Col xs={12}>
					<pre className='recording-text'>
						{this.props.recording.toText()}
					</pre>
				</Col>
			</Row>
		);
	}
}
