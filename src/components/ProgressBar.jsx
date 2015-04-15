var React = require('react');

var ProgressBar = React.createClass({
	propTypes: {
		min: React.PropTypes.number.isRequired,
		max: React.PropTypes.number.isRequired,
		now: React.PropTypes.number.isRequired,
		color: React.PropTypes.string
	},

	calculateWidth() {
		return (100*(this.props.now - this.props.min) / (this.props.max - this.props.min)) + '%';
	},

	style() {
		var result = {
			width: this.calculateWidth()
		};
		if (this.props.color)
			result.backgroundColor = this.props.color;
		return result;
	},

	render() {
		return (
			<div className='progress progress-striped active'>
				<div className='progress-bar' role='progressbar' style={this.style()} />
			</div>
		);
	}
});

module.exports = ProgressBar;
