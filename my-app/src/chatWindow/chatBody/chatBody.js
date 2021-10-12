import React from "react";
import "./styles/chatBody.scss";
import { SelectedPerson } from "./selectedPersonSection/selectedPerson.js";
import { MessageItem } from "./messagesItem/messageItem";
import { InputSection } from "./inputSection/inputSection.js";

export function ChatBody({ allMessages, onStartChat }) {
	// The code below is for auto scrolling down messages
	const autoScrolling = React.useRef(null);
	React.useEffect(() => {
		autoScrolling.current.scrollIntoView({ behavior: "smooth" });
	}, [allMessages]);

	// the code below allows you to memorize a value to improve performance

	return (
		<div className="chat">
			<SelectedPerson />
			<div className="chat__message">
				<MessageItem allMessages={allMessages} />
				<div ref={autoScrolling}></div>
			</div>
			<InputSection onStartChat={onStartChat} />
		</div>
	);
}
