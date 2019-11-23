import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import ParametricScript from '../models/ParametricScript';

export default function ParametricScriptEditor({ script, updateParametricScript }) {
	const scriptText = script.toText();
	const className = script.isValid ? null : 'border-red-500';
	return (
		<textarea
			className={cx('w-full h-16 mb-4 px-4 py-2 rounded border shadow-inner', script.isValid ? 'border-gray-400' : 'border-red')}
			value={scriptText}
			placeholder='abs(sin(t/1000))'
			onChange={e => updateParametricScript(e.target.value)} />
	);
}

ParametricScriptEditor.propTypes = {
	script: PropTypes.instanceOf(ParametricScript).isRequired,
	updateParametricScript: PropTypes.func.isRequired
};
