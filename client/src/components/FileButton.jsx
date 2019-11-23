import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

export default function FileLoadButton({ children, onLoad }) {
	function handleChange(e) {
		const reader = new FileReader();
		const file = e.target.files[0];
		reader.onload = upload => {
			onLoad(upload.target.result);
		};
		reader.readAsText(file);
	}

	return (
		<label className="button flex-1 mx-4">
			{children}
			<input type='file' onChange={handleChange} style={{position: 'fixed', top: '-1000px'}} />
		</label>
	);
}
