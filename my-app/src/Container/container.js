import React from "react";
import "./stylesContainer/container.scss";
import { Persons } from "./persons/persons.js";
import { Chat } from "./chat/chat.js";
import { Context } from "./context.js";

import avatar1 from "../assets/img/chat_avatar_01.jpg";

export function Container() {
	const [context, setContext] = React.useState(["Patrick", "Black", avatar1]);



	return (
		<Context.Provider value={[context, setContext]}>
			<div className="container">
				<div className="container__content">
					<Persons />
					
						<Chat />
					
				</div>
			</div>
		</Context.Provider>
	);
}
