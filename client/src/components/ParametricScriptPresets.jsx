import React from 'react';
import PropTypes from 'prop-types';

const presets = {
	sine: '0.4 + 0.4*sin(t*PI/3000)',
	square: '(t%3000)/3000 < 0.5 ? 0.75 : 0',
	cosinePulses: '(1-0.9*abs(cos(t*PI/15000)))*(1-0.8*abs(cos(t*PI/450000)))'
};

export default function ParametricScriptPresets({ updateParametricScript }) {
	return (
		<div className="border-3d border-gray-200 rounded">
			<div className="bg-gray-200 px-4 py-2">
				<h3 className="uppercase text-sm font-bold">Presets</h3>
			</div>
			<div className="flex flex-col m-4 lg:flex-row lg:mx-0">
				<button className="button flex-1 mb-2 lg:mb-0 lg:mx-4" onClick={() => updateParametricScript(presets.sine)}>Sine</button>
				<button className="button flex-1 mb-2 lg:mb-0 lg:mx-4" onClick={() => updateParametricScript(presets.square)}>Square</button>
				<button className="button flex-1 mb-2 lg:mb-0 lg:mx-4" onClick={() => updateParametricScript(presets.cosinePulses)}>Cosine Pulses</button>
			</div>
		</div>
	);
}

ParametricScriptPresets.propTypes = {
	updateParametricScript: PropTypes.func.isRequired
};
