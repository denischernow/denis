import React, { useContext } from "react";
import { Context } from "../../../Context";
import styles from "./Person.module.css";

export default function Person({ firstName, secondName, avatar }) {
	const [context, setContext] = useContext(Context);

	

	return (
		<div
			onClick={() => setContext([firstName, secondName, avatar])}
			className={styles.person}
		>
			<div className={styles.name}>
				{firstName} {secondName}
			</div>
			<img className={styles.img} src={avatar} alt={"avatar"}></img>
		</div>
	);
}
