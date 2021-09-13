import React, { useEffect } from "react";
import classes from "./NavBar.module.css";
import Person from "./NavItem/Person/Person";
import avatar1 from "../../assets/img/chat_avatar_01.jpg";
import avatar2 from "../../assets/img/chat_avatar_02.jpg";
import avatar3 from "../../assets/img/chat_avatar_03.jpg";
import avatar4 from "../../assets/img/chat_avatar_04.jpg";
import avatar5 from "../../assets/img/chat_avatar_05.jpg";

export default function Nav_bar() {
	const persons = [
		{ id: 1, firstName: "Patrick", secondName: "Black", avatar: avatar1 },
		{ id: 2, firstName: "Stacy", secondName: "Gray", avatar: avatar2 },
		{ id: 3, firstName: "Linda", secondName: "White", avatar: avatar3 },
		{ id: 4, firstName: "Tony", secondName: "Freeman", avatar: avatar4 },
		{ id: 5, firstName: "Leslie", secondName: "Brown", avatar: avatar5 },
	];
	
	// the code below is required to add the first message to the localStorage
	useEffect(() => {
		persons.map((e) => {
			return localStorage.setItem(
				e.firstName,
				`{"0":${JSON.stringify({
					textMassage: "Hello!",
					dateMassage: Date.now(),
					sender: "interlocutor",
				})}}`
			);
		});
	}, persons[0]);

	return (
		<div className={classes.app}>
			{persons.map((el) => {
				return (
					<Person
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
