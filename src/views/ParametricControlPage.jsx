var React = require('react');
var Reflux = require('reflux');

var MotorBar = require('../components/MotorBar');
var RecordingStopPlayButtons = require('../components/RecordingStopPlayButtons');
var ParametricScriptEditor = require('../components/ParametricScriptEditor');
var ParametricScriptPresets = require('../components/ParametricScriptPresets');
var ScriptedControl = require('../components/ScriptedControl');

var motorStore = require('../stores/motorStore');
var playbackStateStore = require('../stores/playbackStateStore');
var parametricScriptStore = require('../stores/parametricScriptStore');

var ParametricControlPage = React.createClass({
	mixins: [
		Reflux.connect(motorStore, 'motorValue'),
		Reflux.connect(playbackStateStore, 'playbackState'),
		Reflux.connect(parametricScriptStore, 'parametricScript')
	],

	getInitialState() {
		return {
			motorValue: motorStore.getDefaultData(),
			playbackState: playbackStateStore.getDefaultData(),
			parametricScript: parametricScriptStore.getDefaultData()
		};
	},

	render() {
		return (
			<div>
				<MotorBar motorValue={this.state.motorValue} />
				<hr />
				<RecordingStopPlayButtons playbackState={this.state.playbackState} />
				<ParametricScriptEditor script={this.state.parametricScript} />
				<ParametricScriptPresets />

				<ScriptedControl playbackState={this.state.playbackState} script={this.state.parametricScript} />
			</div>
		)
	}
});

module.exports = ParametricControlPage;
