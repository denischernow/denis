import avatar1 from "../../assets/img/chat_avatar_01.jpg";
import avatar2 from "../../assets/img/chat_avatar_02.jpg";
import avatar3 from "../../assets/img/chat_avatar_03.jpg";
import avatar4 from "../../assets/img/chat_avatar_04.jpg";
import avatar5 from "../../assets/img/chat_avatar_05.jpg";

export const persons = [
	{ id: 1, firstName: "Patrick", secondName: "Black", avatar: avatar1 },
	{ id: 2, firstName: "Stacy", secondName: "Gray", avatar: avatar2 },
	{ id: 3, firstName: "Linda", secondName: "White", avatar: avatar3 },
	{ id: 4, firstName: "Tony", secondName: "Freeman", avatar: avatar4 },
	{ id: 5, firstName: "Leslie", secondName: "Brown", avatar: avatar5 },
];

export const firstMessages = `{"0":${JSON.stringify({
	textMassage: "Hello!",
	dateMassage: Date.now(),
	sender: "myself",
})},
"1":${JSON.stringify({
	textMassage: "Hello!",
	dateMassage: Date.now(),
	sender: "interlocutor",
})}}`;

export const responseMassage = [
	"Hello glad to see you!",
	"Glad to talk to you!",
	"Who are you?",
	"Lets communicate!",
	"You are a pleasant conversationalist!",
];
