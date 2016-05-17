import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default class RecordingPlayButton extends Component {
	static propTypes = {
		playbackState: PropTypes.string.isRequired,
		playRecording: PropTypes.func.isRequired
	}

	playEnabled() {
		return this.props.playbackState === 'stopped';
	}

	render() {
		const { playRecording } = this.props;
		const disabled = !this.playEnabled();
		return (
			<Button bsStyle='success' block onClick={playRecording} disabled={disabled}>
				<i className='fa fa-play fa-fw' /> Play
			</Button>
		);
	}
}
