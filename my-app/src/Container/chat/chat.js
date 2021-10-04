import React from "react";
import "./styles/chat.scss";
import { Interlocutor } from "./interlocutor/interlocutor.js";
import { MessageMyself } from "./messageMyself/messageMyself.js";
import { MessageInterlocator } from "./messageInterlocator/messageInterlocator.js";
import { Input } from "./input/input.js";

export function Chat({ myselfMessages, iterlocutorMessages, onStartChat }) {
	// The code below is for auto scrolling down messages
	const autoScrolling = React.useRef(null);
	React.useEffect(() => {
		autoScrolling.current.scrollIntoView({ behavior: "smooth" });
	}, [iterlocutorMessages]);

	// the code below allows you to memorize a value to improve performance
	let memoMarkup;
	React.useMemo(() => {
		memoMarkup = [...myselfMessages, ...iterlocutorMessages]
			.sort((a, b) => {
				return a.DATE_MESSAGE - b.DATE_MESSAGE;
			})
			.map((el, index) => {
				if (el.SENDER === "myself") {
					return <MessageMyself children={el.TEXT_MESSAGE} key={Date.now() + index} />;
				} else {
					return <MessageInterlocator children={el.TEXT_MESSAGE} key={Date.now() + index} />;
				}
			});
	}, [myselfMessages, iterlocutorMessages]);

	return (
		<div className="chat">
			<Interlocutor />
			<div className="chat__message">
				{memoMarkup}
				<div ref={autoScrolling}></div>
			</div>
			<Input onStartChat={onStartChat} />
		</div>
	);
}
