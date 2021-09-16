import React from "react";
import { Context } from "../../context.js";
import "./stylesPersonsItem/personItem.scss";

export function PersonItem({ firstName, secondName, avatar }) {
  const [context, setContext] = React.useContext(Context);

  return (
    <div
      onClick={() => setContext([firstName, secondName, avatar])}
      className="person"
    >
      <div className="person__name">
        {firstName} {secondName}
      </div>
      <img className="person__img" src={avatar} alt={"avatar"}></img>
    </div>
  );
}
