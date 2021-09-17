import React from "react";
import "./stylesChat/chat.scss";
import { Interlocutor } from "./interlocutor/interlocutor.js";
import { Message } from "./message/message.js";
import { Input } from "./input/input.js";

export function Chat({ stateMessageMyself, stateMessageinterlocutor, createCorrespondence }) {
	
	// The code below is for auto scrolling down messages
	const messagesEndRef = React.useRef(null);
	React.useEffect(() => {
		messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
	}, [stateMessageinterlocutor]);

	return (
		<div className="chat">
			<Interlocutor />
			<div className="chat__message">
				{[...stateMessageMyself, ...stateMessageinterlocutor]
					.sort((a, b) => {
						return a.dateMassage - b.dateMassage;
					})
					.map((el, index) => {
						return (
							<Message
								children={el.textMassage}
								key={Date.now() + index}
								sender={el.sender}
							/>
						);
					})}
				<div ref={messagesEndRef}></div>
			</div>
			<Input props={createCorrespondence} />
		</div>
	);
}
