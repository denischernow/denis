import "./styles/messageMyself.scss";

export function MessageMyself({ children }) {
	return (
		<div className="messages">
			<div className="messages__myself">{children}</div>
		</div>
	);
}
