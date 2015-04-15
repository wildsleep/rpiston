var bootstrap = require('react-bootstrap');
var React = require('react');
var Reflux = require('reflux');

var Actions = require('../../actions');

var RecordingSaveButton = React.createClass({
	handleSave() {
		Actions.saveRecording();
	},

	render() {
		return (
			<bootstrap.Button block bsStyle='primary' onClick={this.handleSave}>
				<i className='fa fa-save fa-fw' /> Save
			</bootstrap.Button>
		);
	}
});

module.exports = RecordingSaveButton;
