import React from "react";
import "./styles/inputSection.scss";

export function InputSection(onStartChat) {
	const [inputValue, setInputValue] = React.useState("");

	const messageInput = () => {
		onStartChat.onStartChat(inputValue);
		setInputValue("");
	};

	return (
		<div className="section-input">
			<input
				className="section-input__input"
				value={inputValue}
				placeholder={"write your message"}
				onChange={(e) => setInputValue(e.target.value)}
				type="text"
			></input>
			<button className="section-input__button" onClick={messageInput}>
				Send
			</button>
		</div>
	);
}
