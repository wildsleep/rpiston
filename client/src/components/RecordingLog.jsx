import React from 'react';
import PropTypes from 'prop-types';

import Recording from '../models/Recording';

export default function RecordingLog({ recording }) {
	return (
		<pre className="log">
			{recording.toText()}
		</pre>
	);
}

RecordingLog.propTypes = {
	recording: PropTypes.instanceOf(Recording).isRequired
};