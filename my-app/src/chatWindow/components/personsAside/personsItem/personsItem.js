import React from "react";
import { personsContext } from "../personsContext.js";
import "./styles/personItem.scss";

export function PersonItem({ firstName, secondName, avatar }) {
	const [, setSelectedPerson] = React.useContext(personsContext);

	const handeClickPerson = React.useCallback(() => {
		setSelectedPerson([firstName, secondName, avatar]);
	}, [firstName, secondName, avatar]);

	return (
		<div onClick={handeClickPerson} className="person">
			<div className="person__name">
				{firstName} {secondName}
			</div>
			<img className="person__img" src={avatar} alt={"avatar"}></img>
		</div>
	);
}
