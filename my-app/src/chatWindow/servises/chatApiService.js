import { PERSONS, FIRST_MESSAGES, RESPONSE_MESSAGES } from "../constants/chatConstants.js";

class MessagesService {
	constructor() {
		this.messages = [];

		if (localStorage.key(1) === null) {
			PERSONS.forEach((e) => {
				localStorage.setItem(`${e.FIRST_NAME}`, FIRST_MESSAGES);
			});
		}
	}

	getMyMessage = (textMyMessage) => {
		return new Promise((resolve) => {
			resolve(
				(this.messages = [
					...this.messages,
					{ TEXT_MESSAGE: textMyMessage, DATE_MESSAGE: Date.now(), AUTHOR: "me" },
				])
			);
		});
	};

	responseMessage = (selectedPerson) => {
		return new Promise((resolve) => {
			resolve(
				(this.messages = [
					...this.messages,
					{
						TEXT_MESSAGE: RESPONSE_MESSAGES[Math.floor(Math.random() * RESPONSE_MESSAGES.length)],
						DATE_MESSAGE: Date.now(),
						AUTHOR: selectedPerson[0],
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
