import React from "react";
import styles from "./Message.module.css";

export default function Message({ children, sender }) {
	console.log(sender === "myself" && children !== undefined);
	return (
		<div className={styles.massageContainer}>
			{sender === "myself" ? (
				<div className={styles.myselfMassage}>{children}</div>
			) : (
				<div className={styles.interlocatorMassage}>{children}</div>
			)}
		</div>
	);
}
