import React from "react";
import "./stylesMessage/message.scss";

export  function Message({ children, sender }) {
  
  return (
    <div className="messages">
      {sender === "myself" ? (
        <div className="messages__myselfMessages">{children}</div>
      ) : (
        <div className="messages__interlocatorMessages">{children}</div>
      )}
    </div>
  );
}
