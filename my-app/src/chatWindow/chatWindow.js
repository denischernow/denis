import React from "react";
import "./styles/chatWindow.scss";
import { PersonsAside } from "./components/personsAside/personsAside.js";
import { PERSONS } from "./constants/chatConstants.js";

import { personsContext } from "./components/personsAside/personsContext.js";

import { SelectedPerson } from "./components/selectedPersonSection/selectedPerson.js";
import { Messages } from "./components/messages/messages.js";
import { InputSection } from "./components/inputSection/inputSection.js";
import { localStorageService } from "./services/localStorageService";
import { chatApiService } from "./services/chatApiService.js";
import { observable } from "./services/observableService";

export function ChatWindow() {
	// the code below is required for the default selection of the interlocutor
	const [selectedPerson, setSelectedPerson] = React.useState([
		PERSONS[0].FIRST_NAME,
		PERSONS[0].SECOND_NAME,
		PERSONS[0].AVATAR,
	]);

	// the code below is required to initialize the first message and subscribe observable
	React.useEffect(() => {
		observable.subscribe(chatApiService.responseMessage);
		chatApiService.initFirstMessageLocalStorage();
	}, []);

	// the code below simulates a request to the server and receiving a response (in the form of sending a message and receiving a message)
	const [messages, setAllMessage] = React.useState([]);

	const handleStartChat = async (textMyMessage) => {
		if (textMyMessage !== "") {
			observable.fireSet(chatApiService.getMyMessage(textMyMessage));
		}
		setTimeout(() => {
			setAllMessage([...messages, ...observable.get()]);
		}, 400);
	};

	// the code below is needed to save and then load from the localStorage when changing the interlocutor
	React.useEffect(() => {
		localStorageService.getItemToLocalStorage(setAllMessage, selectedPerson);
	}, [selectedPerson]);

	React.useEffect(() => {
		localStorageService.setItemToLocalStorage(selectedPerson, messages);
	}, [messages]);

	// The code below is for auto scrolling down messages
	const autoScrolling = React.useRef(null);
	React.useEffect(() => {
		autoScrolling.current.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	return (
		<personsContext.Provider value={[selectedPerson, setSelectedPerson]}>
			<div className="container">
				<div className="container__content">
					<PersonsAside persons={PERSONS} />
					<div className="chat">
						<SelectedPerson />
						<div className="chat__message">
							<Messages messages={messages} />
							<div ref={autoScrolling}></div>
						</div>
						<InputSection onStartChat={handleStartChat} />
					</div>
				</div>
			</div>
		</personsContext.Provider>
	);
}
