import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default class RecordingLoadButton extends Component {
	static propTypes = {
		loadRecording: PropTypes.func.isRequired
	}

	handleFile(e) {
		var reader = new FileReader();
		var file = e.target.files[0];
		reader.onload = (upload) => {
			this.props.loadRecording(upload.target.result);
		};
		reader.readAsText(file);
	}

	render() {
		const handleFile = this.handleFile.bind(this);
		return (
			<Button componentClass='label' block>
				<i className='fa fa-folder-open fa-fw' /> Load
				<input type='file' onChange={handleFile} style={{position: 'fixed', top: '-1000px'}} />
			</Button>
		);
	}
}
