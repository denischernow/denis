import { PERSONS, FIRST_MESSAGES, RESPONSE_MESSAGES } from "../constants/constants.js";

// the code below is required to add the initial message to the localStorage
export function firstMessagesInitial() {
	PERSONS.forEach((e) => {
		localStorage.setItem(`${e.FIRST_NAME}`, FIRST_MESSAGES);
	});
}
firstMessagesInitial();



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

let myselfMessages = [];
let iterlocutorMessages = [];

export class Correspondence {
	static sendMyself = (e) => {
		return new Promise((resolve) => {
			resolve(
				(myselfMessages = [
					...myselfMessages,
					{ TEXT_MESSAGE: e, DATE_MESSAGE: Date.now(), SENDER: "myself" },
				])
			);
		});
	};
	static responseInterlocator = () => {
		return new Promise((resolve) => {
			resolve(
				(iterlocutorMessages = [
					...iterlocutorMessages,
					{
						TEXT_MESSAGE:
							RESPONSE_MESSAGES[Math.floor(Math.random() * RESPONSE_MESSAGES.length)],
						DATE_MESSAGE: Date.now(),
						SENDER: "interlocutor",
					},
				])
			);
		});
	};
	static resetValue = () => {
		return new Promise((resolve) => {
			resolve((myselfMessages = []), (iterlocutorMessages = []));
		});
	};
}

