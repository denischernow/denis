import React from "react";
import "./styles/messageInterlocator.scss";

// export function MessageInterlocator({ children }) {
// 	return (
// 		<div className="messages">
// 			<div className="messages__interlocator">{children}</div>
// 		</div>
// 	);
// }

export class MessageInterlocator extends React.Component {
	render() {
		return (
			<div className="messages">
				<div className="messages__interlocator">{this.props.children}</div>
			</div>
		);
	}
}
