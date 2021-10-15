class Observable {
	constructor() {
		this._val = [];
		this._listeners = [];
	}

	get() {
		return this._val;
	}

	set(val) {
		this._val = val;
	}

	fireSet(val) {
		this._val = val;
		this._listeners.forEach((listener) => listener());
	}

	subscribe(listener) {
		if (this._listeners !== listener) {
			this._listeners.push(listener);
		}
	}
}

export const observable = new Observable();
