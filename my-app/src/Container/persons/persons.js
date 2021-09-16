import React from "react";
import "./stylesPersons/persons.scss";
import { persons } from "./constatntPersons/constantPersons.js";
import { PersonItem } from "./personsItem/personsItem.js";
import { firstMessage } from "./constatntPersons/constantPersons.js";

export function Persons() {
	React.useEffect(() => {
		persons.map((e) => {
			return localStorage.setItem(e.firstName, firstMessage);
		});
	});

	return (
		<div className="persons">
			{persons.map((el) => {
				return (
					<PersonItem
						key={el.id}
						firstName={el.firstName}
						secondName={el.secondName}
						avatar={el.avatar}
					/>
				);
			})}
		</div>
	);
}
