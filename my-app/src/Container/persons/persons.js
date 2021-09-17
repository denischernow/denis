import React from "react";
import "./stylesPersons/persons.scss";

import { PersonItem } from "./personsItem/personsItem.js";

export function Persons({ persons }) {
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
