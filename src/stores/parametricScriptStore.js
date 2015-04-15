var io = require('socket.io-client');
var Reflux = require('reflux');
var saveAs = require('filesaver.js');

var Actions = require('../actions');
var ParametricScript = require('../models/ParametricScript');

module.exports = Reflux.createStore({
	listenables: Actions,

	init() {
		this.currentScript = new ParametricScript();
	},

	getDefaultData() {
		return this.currentScript;
	},

	onUpdateParametricScript(script) {
		this.currentScript = new ParametricScript(script);
		this.trigger(this.currentScript);
	}
});
