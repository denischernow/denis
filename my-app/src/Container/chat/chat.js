import react, { useCallback, useMemo } from "react";
import "./styles/chat.scss";
import { Interlocutor } from "./interlocutor/interlocutor.js";
import { MessageMyself } from "./messageMyself/messageMylef.js";
import { MessageInterlocator } from "./messageInterlocator/messageInterlocator.js";
import { Input } from "./input/input.js";

export function Chat({ myself, iterlocutor, startChat }) {
	// The code below is for auto scrolling down messages
	const autoScrolling = react.useRef(null);
	react.useEffect(() => {
		autoScrolling.current.scrollIntoView({ behavior: "smooth" });
	}, [iterlocutor]);

	return (
		<div className="chat">
			<Interlocutor />
			<div className="chat__message">
				{useMemo(
					() =>
						[...myself, ...iterlocutor]
							.sort((a, b) => {
								return a.dateMassage - b.dateMassage;
							})
							.map((el, index) => {
								if (el.sender === "myself") {
									return (
										<MessageMyself
											children={el.textMassage}
											key={Date.now() + index}
										/>
									);
								} else {
									return (
										<MessageInterlocator
											children={el.textMassage}
											key={Date.now() + index}
										/>
									);
								}
							}),
					[myself, iterlocutor]
				)}
				<div ref={autoScrolling}></div>
			</div>
			<Input props={startChat} />
		</div>
	);
}
