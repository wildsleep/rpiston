export default class ParametricScript {
	constructor(text, interval) {
		this.text = text;
		this.fn = parse(text);
		this.isValid = !!this.fn;
		this.interval = interval || 100;
	}

	nextEventAfter(time) {
		var value;
		try {
			value = clamp(this.fn(time + this.interval));
		}
		catch (e) {
			console.error(e);
			value = 0;
		}
		return {
			time: time + this.interval,
			value: value
		};
	}

	toText() {
		return this.text;
	}
}

function parse(text) {
	if (!text) return null;
	try {
		// breaks out of strict mode for `with (Math)`, yolo
		return new Function('t', `
			with (Math) {
				return (function () {
					"use strict";
					return ${text};
				})();
			}
		`);
	}
	catch (e) {
		return null;
	}
}

function clamp(x) {
	return Math.max(0, Math.min(1, x));
}
