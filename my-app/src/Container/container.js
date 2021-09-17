import React from "react";
import "./stylesContainer/container.scss";
import { Persons } from "./persons/persons.js";
import {
	persons,
	firstMessages,
	responseMassage,
} from "../container/constantsContainer/constantContainer.js";
import { Chat } from "./chat/chat.js";
import { Context } from "./context.js";
import avatar1 from "../assets/img/chat_avatar_01.jpg";

export function Container() {
	// the code below is required to add the initial message to the localStorage
	React.useEffect(() => {
		persons.map((e) => {
			return localStorage.setItem(e.firstName, firstMessages);
		});
	}, persons[0]);

	// the code below is required for the default selection of the interlocutor
	const [context, setContext] = React.useState(["Patrick", "Black", avatar1]);

	// The below code is for generating correspondence
	const [stateMessageMyself, setStateMessageMyself] = React.useState([]);
	const [stateMessageinterlocutor, setStateMessageinterlocutor] = React.useState([]);

	const createCorrespondence = async (e) => {
		if (e !== "") {
			await sendMyselfMassage(e);
			await responseMassageInterlocator();
		}
	};

	// creating my message
	const sendMyselfMassage = (e) => {
		setStateMessageMyself([
			...stateMessageMyself,
			{ textMassage: e, dateMassage: Date.now(), sender: "myself" },
		]);
	};

	// creating the interlocutor message
	const responseMassageInterlocator = () => {
		setStateMessageinterlocutor([
			...stateMessageinterlocutor,
			{
				textMassage: responseMassage[Math.floor(Math.random() * responseMassage.length)],
				dateMassage: Date.now(),
				sender: "interlocutor",
			},
		]);
	};

	// the code below is needed to save and then load from the localStorage when changing the interlocutor
	React.useEffect(() => {
		setStateMessageMyself(
			Object.values(JSON.parse(localStorage.getItem(context[0]))).filter((e) => {
				return e.sender === "myself";
			})
		);
		setStateMessageinterlocutor(
			Object.values(JSON.parse(localStorage.getItem(context[0]))).filter((e) => {
				return e.sender === "interlocutor";
			})
		);
	}, [context]);
	React.useEffect(() => {
		let arr = [...stateMessageMyself, ...stateMessageinterlocutor];
		localStorage.setItem(context[0], JSON.stringify({ ...arr }));
	}, [stateMessageinterlocutor]);

	return (
		<Context.Provider value={[context, setContext]}>
			<div className="container">
				<div className="container__content">
					<Persons persons={persons} />

					<Chat
						stateMessageMyself={stateMessageMyself}
						stateMessageinterlocutor={stateMessageinterlocutor}
						createCorrespondence={createCorrespondence}
					/>
				</div>
			</div>
		</Context.Provider>
	);
}
