import { PERSONS, FIRST_MESSAGES, RESPONSE_MESSAGES } from "../constants/constants.js";

// the code below is required to add the initial message to the localStorage
export function ferstMessagesInitial() {
	PERSONS.forEach((e) => {
		localStorage.setItem(`${e.FIRST_NAME}`, FIRST_MESSAGES);
	});
}
ferstMessagesInitial();

let myselfMessages = [];
export function sendMyself(e) {
	return (myselfMessages = [
		...myselfMessages,
		{ TEXT_MESSAGE: e, DATE_MESSAGE: Date.now(), SENDER: "myself" },
	]);
}

let iterlocutorMessages = [];
export function responseInterlocator() {
	return (iterlocutorMessages = [
		...iterlocutorMessages,
		{
			TEXT_MESSAGE: RESPONSE_MESSAGES[Math.floor(Math.random() * RESPONSE_MESSAGES.length)],
			DATE_MESSAGE: Date.now(),
			SENDER: "interlocutor",
		},
	]);
}

export function resetValue() {
	myselfMessages = [];
	iterlocutorMessages = [];
}
