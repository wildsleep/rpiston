var React = require('react');
var Reflux = require('reflux');

var ManualMotorControl = require('../components/ManualMotorControl');
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
			<ManualMotorControl motorValue={this.state.motorValue} />
		)
	}
});

module.exports = ControlPage;
