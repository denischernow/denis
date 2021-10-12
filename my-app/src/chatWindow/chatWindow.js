import React from "react";
import "./styles/chatWindow.scss";
import { PersonsAside } from "./personsAside/personsAside.js";
import { PERSONS } from "./constants/chatConstants.js";
import { ChatBody } from "./chatBody/chatBody.js";
import { personsContext } from "./personsAside/personsContext.js";

import { messagesService } from "./servises/chatApiService.js";

export function ChatWindow() {
	// the code below is required for the default selection of the interlocutor
	const [selectedPerson, setSelectedPerson] = React.useState([
		PERSONS[0].FIRST_NAME,
		PERSONS[0].SECOND_NAME,
		PERSONS[0].AVATAR,
	]);

	// the code below simulates a request to the server and receiving a response (in the form of sending a message and receiving a message)
	const [allMessages, setAllMessage] = React.useState([]);

	const handleStartChat = async (e) => {
		let messages = [];
		if (e !== "") {
			await messagesService.getMyMessage(e);
			messages = await messagesService.responseMessage(selectedPerson);
			await messagesService.resetValue();
		}
		setAllMessage([...allMessages, ...messages]);
	};

	// the code below is needed to save and then load from the localStorage when changing the interlocutor
	React.useEffect(() => {
		setAllMessage(Object.values(JSON.parse(localStorage.getItem(selectedPerson[0]))));
	}, [selectedPerson]);
	React.useEffect(() => {
		localStorage.setItem(selectedPerson[0], JSON.stringify({ ...allMessages }));
	}, [allMessages]);

	return (
		<personsContext.Provider value={[selectedPerson, setSelectedPerson]}>
			<div className="container">
				<div className="container__content">
					<PersonsAside persons={PERSONS} />

					<ChatBody allMessages={allMessages} onStartChat={handleStartChat} />
				</div>
			</div>
		</personsContext.Provider>
	);
}
