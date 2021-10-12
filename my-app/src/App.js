import React from "react";
import { ChatWindow } from "./chatWindow/chatWindow.js";
import "./styles/app.scss";

export function App() {
	return (
		<div className="app">
			<ChatWindow />
		</div>
	);
}
