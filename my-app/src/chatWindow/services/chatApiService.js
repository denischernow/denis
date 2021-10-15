import { RESPONSE_MESSAGES, PERSONS, FIRST_MESSAGES, AUTHOR } from "../constants/chatConstants.js";
import { localStorageService } from "./localStorageService.js";
import { observable } from "./observableService.js";

class ChatApiService {
	constructor() {
		this.messages = [];
	}

	initFirstMessageLocalStorage = () => {
		if (localStorage.key(1) === null) {
			localStorageService.setFirstMessageLocalStorage(PERSONS, FIRST_MESSAGES);
		}
	};

	getMyMessage = (textMyMessage) => {
		return [
			{
				TEXT_MESSAGE: textMyMessage,
				DATE_MESSAGE: Date.now(),
				AUTHOR: AUTHOR[0],
			},
		];
	};

	responseMessage = () => {
		return new Promise((resolve) => {
			setTimeout(
				() =>
					resolve(
						observable.set([
							...observable.get(),
							{
								TEXT_MESSAGE:
									RESPONSE_MESSAGES[Math.floor(Math.random() * RESPONSE_MESSAGES.length)],
								DATE_MESSAGE: Date.now(),
								AUTHOR: AUTHOR[1],
							},
						])
					),
				200
			);
		});
	};
}

export const chatApiService = new ChatApiService();
