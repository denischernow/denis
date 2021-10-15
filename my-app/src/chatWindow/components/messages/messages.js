import React from "react";
import "./style/messages.scss";
import { AUTHOR } from "../../constants/chatConstants";
import { MessageMyself } from "../messages/messageMyself/messageMyself.js";
import { MessageAther } from "../messages/messageAther/messageAther.js";

export function Messages({ messages }) {
	let handleMessages = React.useMemo(() => {
		return [...messages]
			.sort((a, b) => {
				return a.DATE_MESSAGE - b.DATE_MESSAGE;
			})
			.map((el, index) => {
				if (el.AUTHOR === AUTHOR[0]) {
					return (
						<div className="messages">
							<MessageMyself key={Date.now() + index} children={el.TEXT_MESSAGE} />
						</div>
					);
				} else {
					return (
						<div className="messages">
							<MessageAther key={Date.now() + index} children={el.TEXT_MESSAGE} />
						</div>
					);
				}
			});
	}, [messages]);

	return <>{handleMessages}</>;
}
