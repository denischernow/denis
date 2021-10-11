import React from "react";
import "./styles/chat.scss";
import { SelectedInterlocutor } from "./selectedInterlocutor/selectedInterlocutor.js";
import { MyMessage } from "./myMessage/myMessage.js";
import { MessageInterlocator } from "./messageInterlocator/messageInterlocator.js";
import { Input } from "./input/input.js";

export function Chat({ myselfMessage, iterlocutorMessage, onStartChat }) {
	// The code below is for auto scrolling down messages
	const autoScrolling = React.useRef(null);
	React.useEffect(() => {
		autoScrolling.current.scrollIntoView({ behavior: "smooth" });
	}, [iterlocutorMessage]);

	// the code below allows you to memorize a value to improve performance
	let handleMessages;
	React.useMemo(() => {
		handleMessages = [...myselfMessage, ...iterlocutorMessage]
			.sort((a, b) => {
				return a.DATE_MESSAGE - b.DATE_MESSAGE;
			})
			.map((el, index) => {
				if (el.AUTHOR === "me") {
					return <MyMessage children={el.TEXT_MESSAGE} key={Date.now() + index} />;
				} else {
					return <MessageInterlocator children={el.TEXT_MESSAGE} key={Date.now() + index} />;
				}
			});
	}, [myselfMessage, iterlocutorMessage]);

	return (
		<div className="chat">
			<SelectedInterlocutor />
			<div className="chat__message">
				{handleMessages}
				<div ref={autoScrolling}></div>
			</div>
			<Input onStartChat={onStartChat} />
		</div>
	);
}
