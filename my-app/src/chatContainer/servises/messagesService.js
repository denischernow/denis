import { PERSONS, FIRST_MESSAGES, RESPONSE_MESSAGES } from "../constants/constants.js";

class MessagesService {
	constructor() {
		this.messages = [];

		if (localStorage.key(1) === null) {
			PERSONS.forEach((e) => {
				localStorage.setItem(`${e.FIRST_NAME}`, FIRST_MESSAGES);
			});
		}
	}

	getMyMessage = (e) => {
		return new Promise((resolve) => {
			resolve(
				(this.messages = [
					...this.messages,
					{ TEXT_MESSAGE: e, DATE_MESSAGE: Date.now(), AUTHOR: "me" },
				])
			);
		});
	};

	responseMessage = () => {
		return new Promise((resolve) => {
			resolve(
				(this.messages = [
					...this.messages,
					{
						TEXT_MESSAGE: RESPONSE_MESSAGES[Math.floor(Math.random() * RESPONSE_MESSAGES.length)],
						DATE_MESSAGE: Date.now(),
						AUTHOR: "interlocutor",
					},
				])
			);
		});
	};

	resetValue = () => {
		return new Promise((resolve) => {
			resolve((this.messages = []));
		});
	};
}

export const messagesService = new MessagesService();
