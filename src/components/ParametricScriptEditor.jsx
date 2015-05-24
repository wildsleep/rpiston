var bootstrap = require('react-bootstrap');
var React = require('react');
var Reflux = require('reflux');

var Actions = require('../actions');
var ParametricScript = require('../models/ParametricScript');

var ParametricScriptEditor = React.createClass({
	propTypes: {
		script: React.PropTypes.instanceOf(ParametricScript).isRequired
	},

	validationState() {
		return this.props.script.isValid ? null : 'error';
	},

	handleChange(e) {
		Actions.updateParametricScript.trigger(e.target.value);
	},

	render() {
		return (
			<bootstrap.Row>
				<bootstrap.Col xs={12}>
					<bootstrap.Input type='textarea' standalone value={this.props.script.toText()} placeholder='abs(sin(t/1000))' bsStyle={this.validationState()} onChange={this.handleChange} />
				</bootstrap.Col>
			</bootstrap.Row>
		);
	}
});

module.exports = ParametricScriptEditor;
