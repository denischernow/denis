import React from "react";
import "./styles/persons.scss";
import { PersonItem } from "./personsItem/personsItem.js";

// export function Persons({ persons }) {
// 	return (
// 		<div className="persons">
// 			{persons.map((el) => {
// 				return (
// 					<PersonItem
// 						key={el.ID}
// 						firstName={el.FIRST_NAME}
// 						secondName={el.SECOND_NAME}
// 						avatar={el.AVATAR}
// 					/>
// 				);
// 			})}
// 		</div>
// 	);
// }

export class Persons extends React.Component {
	render() {
		return (
			<div className="persons">
				{this.props.persons.map((el) => {
					return (
						<PersonItem
							key={el.ID}
							firstName={el.FIRST_NAME}
							secondName={el.SECOND_NAME}
							avatar={el.AVATAR}
						/>
					);
				})}
			</div>
		);
	}
}
