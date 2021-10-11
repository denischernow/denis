import React from "react";
import "./styles/myMessage.scss";

export function MyMessage({ children }) {
	return (
		<div className="messages">
			<div className="messages__myself">{children}</div>
		</div>
	);
}
