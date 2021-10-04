import React from "react";
import "./styles/container.scss";
import { Persons } from "./persons/persons.js";
import { PERSONS } from "./constants/constants.js";
import { Chat } from "./chat/chat.js";
import { personsContext } from "./context.js";
import { sendMyself, responseInterlocator, resetValue } from "./servises/services";

export function Container() {
	// the code below is required for the default selection of the interlocutor
	const [context, setContext] = React.useState([
		PERSONS[0].FIRST_NAME,
		PERSONS[0].SECOND_NAME,
		PERSONS[0].AVATAR,
	]);

	const [myselfMessages, setMyselfMessages] = React.useState([]);
	const [iterlocutorMessages, setIterlocutorMessages] = React.useState([]);
	let i = [];
	let k = [];
	const handleStartChat = async (e) => {
		if (e !== "") {
			i = await sendMyself(e);
			k = await responseInterlocator();
			await resetValue();
		}
		setMyselfMessages([...myselfMessages, ...i]);
		setIterlocutorMessages([...iterlocutorMessages, ...k]);
	};

	// the code below is needed to save and then load from the localStorage when changing the interlocutor
	React.useEffect(() => {
		setMyselfMessages(
			Object.values(JSON.parse(localStorage.getItem(context[0]))).filter((e) => {
				return e.SENDER === "myself";
			})
		);
		setIterlocutorMessages(
			Object.values(JSON.parse(localStorage.getItem(context[0]))).filter((e) => {
				return e.SENDER === "interlocutor";
			})
		);
	}, [context]);

	React.useEffect(() => {
		let arr = [...myselfMessages, ...iterlocutorMessages];
		localStorage.setItem(context[0], JSON.stringify({ ...arr }));
	}, [iterlocutorMessages]);

	return (
		<personsContext.Provider value={[context, setContext]}>
			<div className="container">
				<div className="container__content">
					<Persons persons={PERSONS} />

					<Chat
						myselfMessages={myselfMessages}
						iterlocutorMessages={iterlocutorMessages}
						onStartChat={handleStartChat}
					/>
				</div>
			</div>
		</personsContext.Provider>
	);
}
