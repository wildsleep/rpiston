var bootstrap = require('react-bootstrap');
var React = require('react');

var Actions = require('../actions');

module.exports = React.createClass({
	render() {
		return (
			<bootstrap.Row>
				<bootstrap.Col xs={4}>
					<bootstrap.Button bsStyle='danger' block onClick={this.handleRecord}>
						<i className='fa fa-circle fa-fw' /> Record
					</bootstrap.Button>
				</bootstrap.Col>
				<bootstrap.Col xs={4}>
					<bootstrap.Button bsStyle='success' block onClick={this.handlePlay}>
						<i className='fa fa-play fa-fw' /> Play
					</bootstrap.Button>
				</bootstrap.Col>
				<bootstrap.Col xs={4}>
					<bootstrap.Button block onClick={this.handleStop}>
						<i className='fa fa-stop fa-fw' /> Stop
					</bootstrap.Button>
				</bootstrap.Col>
			</bootstrap.Row>
		);
	},
	handlePlay() {

	},
	handleStop() {

	},
	handleRecord() {

	}
});
