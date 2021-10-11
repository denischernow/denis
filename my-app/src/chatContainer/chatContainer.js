import React from "react";
import "./styles/chatContainer.scss";
import { Persons } from "./persons/persons.js";
import { PERSONS } from "./constants/constants.js";
import { Chat } from "./chat/chat.js";
import { personsContext } from "./persons/personsContext.js";

import { messagesService } from "./servises/messagesService.js";

export function ChatContainer() {
	// the code below is required for the default selection of the interlocutor
	const [selectedPerson, setSelectedPerson] = React.useState([
		PERSONS[0].FIRST_NAME,
		PERSONS[0].SECOND_NAME,
		PERSONS[0].AVATAR,
	]);

	// the code below simulates a request to the server and receiving a response (in the form of sending a message and receiving a message)
	const [myselfMessage, setMyselfMessage] = React.useState([]);
	const [iterlocutorMessage, setIterlocutorMessage] = React.useState([]);

	let messages = [];

	const handleStartChat = async (e) => {
		if (e !== "") {
			await messagesService.getMyMessage(e);
			messages = await messagesService.responseMessage();
			await messagesService.resetValue();
		}
		setMyselfMessage([
			...myselfMessage,
			...messages.filter((e) => {
				return e.AUTHOR === "me";
			}),
		]);
		setIterlocutorMessage([
			...iterlocutorMessage,
			...messages.filter((e) => {
				return e.AUTHOR === "interlocutor";
			}),
		]);
	};

	// the code below is needed to save and then load from the localStorage when changing the interlocutor
	React.useEffect(() => {
		setMyselfMessage(
			Object.values(JSON.parse(localStorage.getItem(selectedPerson[0]))).filter((e) => {
				return e.AUTHOR === "me";
			})
		);
		setIterlocutorMessage(
			Object.values(JSON.parse(localStorage.getItem(selectedPerson[0]))).filter((e) => {
				return e.AUTHOR === "interlocutor";
			})
		);
	}, [selectedPerson]);

	React.useEffect(() => {
		messages = [...myselfMessage, ...iterlocutorMessage];
		localStorage.setItem(selectedPerson[0], JSON.stringify({ ...messages }));
	}, [iterlocutorMessage]);

	return (
		<personsContext.Provider value={[selectedPerson, setSelectedPerson]}>
			<div className="container">
				<div className="container__content">
					<Persons persons={PERSONS} />

					<Chat
						myselfMessage={myselfMessage}
						iterlocutorMessage={iterlocutorMessage}
						onStartChat={handleStartChat}
					/>
				</div>
			</div>
		</personsContext.Provider>
	);
}
