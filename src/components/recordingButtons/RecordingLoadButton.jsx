var bootstrap = require('react-bootstrap');
var React = require('react');
var Reflux = require('reflux');

var Actions = require('../../actions');

var RecordingLoadButton = React.createClass({
	handleFile(e) {
		var reader = new FileReader();
		var file = e.target.files[0];
		reader.onload = (upload) => {
			Actions.loadRecording(upload.target.result);
		};
		reader.readAsText(file);
	},

	render() {
		return (
			<bootstrap.Button componentClass='label' block>
				<i className='fa fa-folder-open fa-fw' /> Load
				<input type='file' onChange={this.handleFile} style={{position: 'fixed', top: '-1000px'}} />
			</bootstrap.Button>
		);
	}
});

module.exports = RecordingLoadButton;
