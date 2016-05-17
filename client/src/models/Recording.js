export default class Recording {
	constructor(events) {
		this.events = events || [];
	}

	addEvent(event) {
		return new Recording(this.events.concat(event));
	}

	nextEventAfter(time) {
		return this.events.filter((event) => event.time > time)[0];
	}

	toText() {
		return this.events
			.map((event) => 't=' + event.time + ' ' + event.value)
			.join('\n');
	}

	static fromText(text) {
		var events = text.split('\n')
			.map((token) => {
				var split = /t=(\d+) ([\d.]+)/.exec(token);
				return {
					time: parseInt(split[1], 10),
					value: parseFloat(split[2])
				};
			});
		return new Recording(events);
	}
}
