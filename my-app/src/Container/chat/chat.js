import React from "react";
import "./stylesChat/chat.scss";
import { Interlocutor } from "./interlocutor/interlocutor.js";
import { Message } from "./message/message.js";
import { Input } from "./input/input.js";
import { Context } from "../context.js";
import { responseMassage } from "./constantChat/constantChat.js";

export function Chat() {
	// The below code is for generating my messages

	const [stateMessage, setStateMessage] = React.useState([
		{ textMassage: "Hello!", dateMassage: Date.now(), sender: "interlocutor" },
	]);
	const [context, setContext] = React.useContext(Context);

	const sendMyselfMassage = (e) => {
		if (e !== "") {
			setStateMessage([
				...stateMessage,
				{ textMassage: e, dateMassage: Date.now(), sender: "myself" },
			]);
		}
	};

	// the code "useEffect" below is needed to simulate the answer of the interlocutor
	React.useEffect(() => {
		setTimeout(() => {
			setStateMessage([
				...stateMessage,
				{
					textMassage: responseMassage[Math.floor(Math.random() * responseMassage.length)],
					dateMassage: Date.now(),
					sender: "interlocutor",
				},
			]);
		}, 1000);
		// the correspondence is saved in the localStorage for safety when changing the interlocutor
		localStorage.setItem(context[0], JSON.stringify({ ...stateMessage }));
	}, [stateMessage[stateMessage.length - 1].sender]);

	//   the code below is needed to download messages from the localStorage when changing the interlocutor.
	React.useEffect(() => {
		setStateMessage(Object.values(JSON.parse(localStorage.getItem(context[0]))));
	}, [context]);

	// The code below is for auto scrolling down messages
	const messagesEndRef = React.useRef(null);
	React.useEffect(() => {
		messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
	}, [stateMessage]);

	return (
		<div className="chat">
			<Interlocutor />
			<div className="chat__message">
				{stateMessage.map((el, index) => {
					return (
						<Message children={el.textMassage} key={Date.now() + index} sender={el.sender} />
					);
				})}
				<div ref={messagesEndRef}></div>
			</div>
			<Input props={sendMyselfMassage} />
		</div>
	);
}
