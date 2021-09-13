import React, { useState } from "react";
import styles from "./Container.module.css";
import Nav_bar from "./NavBar/NavBar";
import Chat from "./Chat/Chat.jsx";
import { Context } from "./Context";
import avatar1 from "../assets/img/chat_avatar_01.jpg";

export default function Container() {
	const [context, setContext] = useState(["Patrick", "Black", avatar1]);

	return (
		<Context.Provider value={[context, setContext]}>
			<div className={styles.container}>
				<div className={styles.container__content}>
					<Nav_bar />
					<Chat />
				</div>
			</div>
		</Context.Provider>
	);
}
