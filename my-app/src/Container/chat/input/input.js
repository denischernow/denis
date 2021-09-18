import react from "react";
import "./styles/input.scss";

export function Input(props) {
	const [inputValue, setInputValue] = react.useState("");

	const messageInput = () => {
		props.props(inputValue);
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