import React from 'react';
import PropTypes from 'prop-types';
import { inspect } from 'util';

export default function ConnectionLog({ log }) {
	return (
		<pre className="log">
			{log.map(inspect).join('\n')}
		</pre>
	);
}

ConnectionLog.propTypes = {
	log: PropTypes.array.isRequired
}
