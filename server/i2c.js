var i2c;
try {
	i2c = require('i2c');
} catch (e) {
	var util = require('util');

	i2c = function i2c(addr, opts) {
		this.addr = addr;
		console.log('Created i2c at address ' + addr + ', options ' + util.inspect(opts));
	};
	i2c.prototype.writeBytes = function (cmd, bytes, handleError) {
		console.log('Wrote to i2c at address ' + this.addr + ', command ' + cmd + ', bytes ' + util.inspect(bytes));
	};
}
module.exports = i2c;
