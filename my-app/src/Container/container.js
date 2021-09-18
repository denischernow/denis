import react from "react";
import "./styles/container.scss";
import { Persons } from "./persons/persons.js";
import { persons, first_messages, response_massage } from "./constants/constants.js";
import { Chat } from "./chat/chat.js";
import { personsContext } from "./context.js";

export function Container() {
	// the code below is required to add the initial message to the localStorage
	react.useEffect(() => {
		persons.map((e) => {
			return localStorage.setItem(e.firstName, first_messages);
		});
	}, persons[0]);

	// the code below is required for the default selection of the interlocutor
	const [context, setContext] = react.useState([
		persons[0].firstName,
		persons[0].secondName,
		persons[0].avatar,
	]);

	// The below code is for generating correspondence
	const [myself, setmyself] = react.useState([]);
	const [iterlocutor, setInterlocutor] = react.useState([]);

	const startChat = async (e) => {
		if (e !== "") {
			await sendMyself(e);
			await responseInterlocator();
		}
	};

	// creating my message
	const sendMyself = (e) => {
		setmyself([...myself, { textMassage: e, dateMassage: Date.now(), sender: "myself" }]);
	};

	// creating the interlocutor message
	const responseInterlocator = () => {
		setInterlocutor([
			...iterlocutor,
			{
				textMassage: response_massage[Math.floor(Math.random() * response_massage.length)],
				dateMassage: Date.now(),
				sender: "interlocutor",
			},
		]);
	};

	// the code below is needed to save and then load from the localStorage when changing the interlocutor
	react.useEffect(() => {
		setmyself(
			Object.values(JSON.parse(localStorage.getItem(context[0]))).filter((e) => {
				return e.sender === "myself";
			})
		);
		setInterlocutor(
			Object.values(JSON.parse(localStorage.getItem(context[0]))).filter((e) => {
				return e.sender === "interlocutor";
			})
		);
	}, [context]);

	react.useEffect(() => {
		let arr = [...myself, ...iterlocutor];
		localStorage.setItem(context[0], JSON.stringify({ ...arr }));
	}, [iterlocutor]);

	return (
		<personsContext.Provider value={[context, setContext]}>
			<div className="container">
				<div className="container__content">
					<Persons persons={persons} />

					<Chat myself={myself} iterlocutor={iterlocutor} startChat={startChat} />
				</div>
			</div>
		</personsContext.Provider>
	);
}
