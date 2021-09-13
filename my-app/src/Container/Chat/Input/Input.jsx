import React, { useState } from "react";
import styles from "./Input.module.css";

export default function Input(props) {
	const [inputValue, setInputValue] = useState("");

	const messageInput = () => {
		props.props(inputValue);
		setInputValue("");
	};

	return (
		<div className={styles.containerInput}>
			<input
				className={styles.input}
				value={inputValue}
				placeholder={"write your message"}
				onChange={(e) => setInputValue(e.target.value)}
				type="text"
			></input>
			<button className={styles.button} onClick={messageInput}>
				Send
			</button>
		</div>
	);
}
