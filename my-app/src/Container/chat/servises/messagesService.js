import { PERSONS, FIRST_MESSAGES, RESPONSE_MESSAGES } from "../../constants/constants.js";

// export function sendMyself(e) {
// 	return new Promise((resolve) => {
// 		resolve(
// 			(myselfMessages = [
// 				...myselfMessages,
// 				{ TEXT_MESSAGE: e, DATE_MESSAGE: Date.now(), SENDER: "myself" },
// 			])
// 		);
// 	});
// }

// export function responseInterlocator() {
// 	return new Promise((resolve) => {
// 		resolve(
// 			(iterlocutorMessages = [
// 				...iterlocutorMessages,
// 				{
// 					TEXT_MESSAGE:
// 						RESPONSE_MESSAGES[Math.floor(Math.random() * RESPONSE_MESSAGES.length)],
// 					DATE_MESSAGE: Date.now(),
// 					SENDER: "interlocutor",
// 				},
// 			])
// 		);
// 	});
// }

// export function resetValue() {
// 	return new Promise((resolve) => {
// 		resolve((myselfMessages = []), (iterlocutorMessages = []));
// 	});
// }

class MessagesService {
	myselfMessages = [];
	iterlocutorMessages = [];

	getFirstMessagesInitial = () => {
		PERSONS.forEach((e) => {
			localStorage.setItem(`${e.FIRST_NAME}`, FIRST_MESSAGES);
		});
	};

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

export const messagesService = new MessagesService();

// the code below is required to add the initial message to the localStorage
messagesService.getFirstMessagesInitial();
