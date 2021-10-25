import { AUTHOR, PERSONS } from "../constants/chatConstants.js";
import { localStorageService } from "./localStorageService.js";
import { chatMapper } from "./chatMapper.js";

class ChatApiService {
	constructor() {
		this.setIntervalId = [];
		this.lastAutoMessage = [];
		this.totalMessage = [];
	}

	autoMessage = (
		selectedPerson = [PERSONS[0].FIRST_NAME, PERSONS[0].SECOND_NAME, PERSONS[0].AVATAR],
		setMessage
	) => {
		chatApiService.stopAutoMessage();
		this.setIntervalId = setInterval(() => {
			this.getNotMyMessage().then((v) => {
				this.lastAutoMessage = v;
			});
			this.totalMessage = [
				...Object.values(JSON.parse(localStorage.getItem(selectedPerson[0]))),
				...this.lastAutoMessage,
			];

			localStorage.setItem(selectedPerson[0], JSON.stringify({ ...this.totalMessage }));
			setMessage(Object.values(JSON.parse(localStorage.getItem(selectedPerson[0]))));
		}, 3000);
	};

	stopAutoMessage = () => {
		clearInterval(this.setIntervalId);
	};

	sendMyMessage = (textMyMessage) => {
		return new Promise((resolve) => {
			resolve(chatMapper.mapToDTO(textMyMessage, AUTHOR));
		});
	};
	getNotMyMessage = () => {
		return fetch(`https://jsonplaceholder.typicode.com/posts/${Math.floor(Math.random() * 50)}`)
			.then((response) => response.json())
			.then((json) => {
				return chatMapper.mapToUI(json, AUTHOR);
			});
	};

	sendMassage = async (textMyMessage, selectedPerson, messages) => {
		this.stopAutoMessage();
		let lastMyMessage = await this.sendMyMessage(textMyMessage);
		let lastResponseMessage = await this.getNotMyMessage();
		localStorageService.setItemToLocalStorage(
			selectedPerson,
			lastMyMessage,
			lastResponseMessage,
			messages
		);
		return [...messages, ...lastMyMessage, ...lastResponseMessage];
	};

	getItemToLocalStorage = (selectedPerson) => {
		return localStorageService.getItemToLocalStorage(selectedPerson);
	};
}

export const chatApiService = new ChatApiService();
