var React = require('react');
var Reflux = require('reflux');

var MotorBar = require('../components/MotorBar');
var MotorControlButtons = require('../components/MotorControlButtons');
var motorStore = require('../stores/motorStore');

var ControlPage = React.createClass({
	mixins: [ Reflux.connect(motorStore, 'motorValue') ],

	getInitialState() {
		return {
			motorValue: motorStore.getDefaultData()
		};
	},

	render() {
		return (
			<div>
				<MotorBar motorValue={this.state.motorValue} />
				<MotorControlButtons />
			</div>
		)
	}
});

module.exports = ControlPage;
