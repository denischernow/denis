import React from "react";
import "./style/messageItem.scss";

export function MessageItem({ allMessages }) {
	let handleMessages = React.useMemo(() => {
		return [...allMessages]
			.sort((a, b) => {
				return a.DATE_MESSAGE - b.DATE_MESSAGE;
			})
			.map((el, index) => {
				if (el.AUTHOR === "me") {
					return (
						<div className="messages__myself" key={Date.now() + index}>
							{el.TEXT_MESSAGE}
						</div>
					);
				} else {
					return (
						<div className="messages__interlocator" key={Date.now() + index}>
							{el.TEXT_MESSAGE}
						</div>
					);
				}
			});
	}, [allMessages]);

	return <div className="messages">{handleMessages}</div>;
}
