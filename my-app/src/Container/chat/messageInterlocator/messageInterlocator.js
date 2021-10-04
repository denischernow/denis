import React from "react";
import "./styles/messageInterlocator.scss";

export function MessageInterlocator({ children }) {
	return (
		<div className="messages">
			<div className="messages__interlocator">{children}</div>
		</div>
	);
}
