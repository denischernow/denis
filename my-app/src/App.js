import React from "react";
import { ChatContainer } from "./chatContainer/chatContainer.js";
import "./styles/app.scss";

export function App() {
	return (
		<div className="app">
			<ChatContainer />
		</div>
	);
}
