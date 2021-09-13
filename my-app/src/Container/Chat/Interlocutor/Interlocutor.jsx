/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import { Context } from "../../Context";
import styles from "./Interlocutor.module.css";

// The code below is required to get information about a person. This information is required to switch between chats and display information about the selected person in the component "Interlocutor"//

export default function Interlocutor() {
	const [context, setContext] = useContext(Context);

	return (
		<div className={styles.interlocutor}>
			<p className={styles.name}>
				{context[0]} {context[1]}
			</p>
			<img className={styles.img} alt="avatar" src={context[2]}></img>
		</div>
	);
}
