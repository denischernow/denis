import React from "react";
import { personsContext } from "../personsAside/personsContext.js";
import "./styles/selectedPerson.scss";

// The code below is required to get information about a person. This information is required to switch between chats and display information about the selected person //
export function SelectedPerson() {
	const [selectedPerson] = React.useContext(personsContext);

	return (
		<div className="interlocutor">
			<p className="interlocutor__name">
				{selectedPerson[0]} {selectedPerson[1]}
			</p>
			<img className="interlocutor__img" alt="avatar" src={selectedPerson[2]}></img>
		</div>
	);
}
