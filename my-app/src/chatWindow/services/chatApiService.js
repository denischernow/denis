import { AUTHOR } from "../constants/chatConstants.js";
import { localStorageService } from "./localStorageService.js";
import { chatMapperService } from "./chatMapperService.js";

class ChatApiService {
	constructor() {
		this.messages = [];
	}

	sendMyMessage = (textMyMessage) => {
		return new Promise((resolve) => {
			resolve(chatMapperService.mapMyMessage(textMyMessage, AUTHOR));
		});
	};
	getNotMyMessage = () => {
		return fetch(`https://jsonplaceholder.typicode.com/posts/${Math.floor(Math.random() * 50)}`)
			.then((response) => response.json())
			.then((json) => {
				return chatMapperService.mapNotMyMessage(json, AUTHOR);
			});
	};

	sendMassage = async (textMyMessage, selectedPerson, messages) => {
		let i = await this.sendMyMessage(textMyMessage);
		let k = await this.getNotMyMessage();
		localStorageService.setItemToLocalStorage(selectedPerson, messages, i, k);
		return [...i, ...k];
	};

	getItemToLocalStorage = (setMessage, selectedPerson) => {
		localStorageService.getItemToLocalStorage(setMessage, selectedPerson);
	};
}

export const chatApiService = new ChatApiService();
