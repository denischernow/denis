import React from "react";
import "./styles/messageMyself.scss";

// export function MessageMyself({ children }) {
// 	return (
// 		<div className="messages">
// 			<div className="messages__myself">{children}</div>
// 		</div>
// 	);
// }

export class MessageMyself extends React.Component {
	render() {
		return (
			<div className="messages">
				<div className="messages__myself">{this.props.children}</div>
			</div>
		);
	}
}
