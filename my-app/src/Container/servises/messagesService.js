import { PERSONS, FIRST_MESSAGES, RESPONSE_MESSAGES } from "../constants/constants.js";

class MessagesService {
	constructor(value) {
		this.myselfMessages = value;
		this.iterlocutorMessages = value;
		if (localStorage.getItem("Patrick") === null) {
			return PERSONS.forEach((e) => {
				localStorage.setItem(`${e.FIRST_NAME}`, FIRST_MESSAGES);
			});
		}
	}

	getMyMessage = (e) => {
		return new Promise((resolve) => {
			resolve(
				(this.myselfMessages = [
					...this.myselfMessages,
					{ TEXT_MESSAGE: e, DATE_MESSAGE: Date.now(), SENDER: "myself" },
				])
			);
		});
	};

	responseMessage = () => {
		return new Promise((resolve) => {
			resolve(
				(this.iterlocutorMessages = [
					...this.iterlocutorMessages,
					{
						TEXT_MESSAGE: RESPONSE_MESSAGES[Math.floor(Math.random() * RESPONSE_MESSAGES.length)],
						DATE_MESSAGE: Date.now(),
						SENDER: "interlocutor",
					},
				])
			);
		});
	};

	resetValue = () => {
		return new Promise((resolve) => {
			resolve((this.myselfMessages = []), (this.iterlocutorMessages = []));
		});
	};
}

export const messagesService = new MessagesService([]);
