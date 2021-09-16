import React from "react";
import { Context } from "../../context.js";
import "./stylesInterlocator/interlocutor.scss";

// The code below is required to get information about a person. This information is required to switch between chats and display information about the selected person in the component "Interlocutor"//
export function Interlocutor() {
  const [context, setContext] = React.useContext(Context);

  return (
    <div className="interlocutor">
      <p className="interlocutor__name">
        {context[0]} {context[1]}
      </p>
      <img className="interlocutor__img" alt="avatar" src={context[2]}></img>
    </div>
  );
}
