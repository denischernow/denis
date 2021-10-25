import React from "react";
import "./style/messageOther.scss";

export function MessageOther({ children }) {
	return (
		<>
			<div className="messages-other">{children}</div>
		</>
	);
}
