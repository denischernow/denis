import React from "react";
import { Container } from "./container/container.js";
import "./styles/app.scss";

// export function App() {
// 	return (
// 		<div className="app">
// 			<Container />
// 		</div>
// 	);
// }

export class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Container />
			</div>
		);
	}
}
