import react from "react";
import { personsContext } from "../../context.js";
import "./styles/interlocutor.scss";

// The code below is required to get information about a person. This information is required to switch between chats and display information about the selected person in the component "Interlocutor"//
export function Interlocutor() {
	const [context, setContext] = react.useContext(personsContext);

	return (
		<div className="interlocutor">
			<p className="interlocutor__name">
				{context[0]} {context[1]}
			</p>
			<img className="interlocutor__img" alt="avatar" src={context[2]}></img>
		</div>
	);
}
