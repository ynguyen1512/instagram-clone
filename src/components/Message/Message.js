import { Helmet } from "react-helmet";
import Navigation from "../Navigation/Navigation";
import ListOfMess from "./ListOfMess";
import "./Message.scss";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import { useState } from "react";
import WindowChat from "./WindowChat";

function Message() {
  const [showChat, setShowChat] = useState(false);
  return (
    <div className="message-wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Inbox • Chats</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="message-left">
        <Navigation isMessageView={true} />
      </div>
      <div className="message-mid">
        <ListOfMess onItemClick={() => setShowChat(true)} />
      </div>
      <div className="message-right">
        {showChat ? (
          <WindowChat />
        ) : (
          <div className="message-empty-info">
            <MailOutlinedIcon className="message__icon" />
            <span className="message__title">Your messages</span>
            <span className="message__desc">
              Send private photos and messages to a friend or group
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Message;
