import "./style/messageMyself.scss";
import React from "react";

export function MessageMyself({ children }) {
	return (
		<>
			<div className="messages-myself">{children}</div>
		</>
	);
}
