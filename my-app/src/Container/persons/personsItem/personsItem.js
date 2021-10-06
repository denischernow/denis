import React from "react";
import { personsContext } from "../../context.js";
import "./styles/personItem.scss";

export function PersonItem({ firstName, secondName, avatar }) {
	const [, setContext] = React.useContext(personsContext);

	const memoizedContext = React.useCallback(() => {
		setContext([firstName, secondName, avatar]);
	}, [firstName, secondName, avatar]);

	return (
		<div onClick={memoizedContext} className="person">
			<div className="person__name">
				{firstName} {secondName}
			</div>
			<img className="person__img" src={avatar} alt={"avatar"}></img>
		</div>
	);
}
