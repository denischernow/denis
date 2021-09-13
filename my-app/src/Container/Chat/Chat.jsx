import React, { useState, useEffect, useRef, useContext } from "react";
import styles from "./Chat.module.css";
import Interlocutor from "./Interlocutor/Interlocutor";
import Message from "./Message/Message";
import Input from "./Input/Input";
import { Context } from "../Context";

export default function Chat() {
	// The below code is for generating messages
	const [stateMassage, setStateMassage] = useState([
		{ textMassage: "Hello!", dateMassage: Date.now(), sender: "interlocutor" },
	]);

	const [context, setContext] = useContext(Context);

	const responseMassage = [
		"Hello glad to see you!",
		"Very glad to talk to you!",
		"Who are you?",
		"Lets communicate!",
		"You are a pleasant conversationalist!",
	];

	const sendMyselfMassage = (e) => {
		if (e !== "") {
			setStateMassage([
				...stateMassage,

				{ textMassage: e, dateMassage: Date.now(), sender: "myself" },
			]);
		}
	};

	// the code "useEffect" below is needed to simulate the answer of the interlocutor
	useEffect(() => {
		setTimeout(() => {
			setStateMassage([
				...stateMassage,
				{
					textMassage: responseMassage[Math.floor(Math.random() * responseMassage.length)],
					dateMassage: Date.now(),
					sender: "interlocutor",
				},
			]);
		}, 1000);
		localStorage.setItem(context[0], JSON.stringify({ ...stateMassage }));
		
	}, [stateMassage[stateMassage.length - 1].sender]);

	useEffect(() => {
		setStateMassage(Object.values(JSON.parse(localStorage.getItem(context[0]))));
	}, [context]);

	// The code below is for auto scrolling down messages
	const messagesEndRef = useRef(null);

	const scrollToBottom = () => {
		messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(scrollToBottom, [stateMassage]);

	return (
		<div className={styles.chat}>
			<Interlocutor />
			<div className={styles.messageContainer}>
				{stateMassage.map((el, index) => {
					return <Message children={el.textMassage} key={index} sender={el.sender} />;
				})}
				<div ref={messagesEndRef}></div>
			</div>
			<Input props={sendMyselfMassage} />
		</div>
	);
}
