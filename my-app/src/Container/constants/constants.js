import AVATAR_1 from "../../assets/img/chat_avatar_01.jpg";
import AVATAR_2 from "../../assets/img/chat_avatar_02.jpg";
import AVATAR_3 from "../../assets/img/chat_avatar_03.jpg";
import AVATAR_4 from "../../assets/img/chat_avatar_04.jpg";
import AVATAR_5 from "../../assets/img/chat_avatar_05.jpg";

export const PERSONS = [
	{ ID: 1, FIRST_NAME: "Patrick", SECOND_NAME: "Black", AVATAR: AVATAR_1 },
	{ ID: 2, FIRST_NAME: "Stacy", SECOND_NAME: "Gray", AVATAR: AVATAR_2 },
	{ ID: 3, FIRST_NAME: "Linda", SECOND_NAME: "White", AVATAR: AVATAR_3 },
	{ ID: 4, FIRST_NAME: "Tony", SECOND_NAME: "Freeman", AVATAR: AVATAR_4 },
	{ ID: 5, FIRST_NAME: "Leslie", SECOND_NAME: "Brown", AVATAR: AVATAR_5 },
];

export const FIRST_MESSAGES = `{"0":${JSON.stringify({
	TEXT_MESSAGE: "Hello!",
	DATE_MESSAGE: Date.now(),
	SENDER: "myself",
})},
"1":${JSON.stringify({
	TEXT_MESSAGE: "Hello!",
	DATE_MESSAGE: Date.now(),
	SENDER: "interlocutor",
})}}`;

export const RESPONSE_MESSAGES = [
	"Hello glad to see you!",
	"Glad to talk to you!",
	"Who are you?",
	"Lets communicate!",
	"You are a pleasant conversationalist!",
];
