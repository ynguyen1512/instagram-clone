import Navigation from "../Navigation/Navigation";
import "./Message.scss";

function Message() {
  return (
    <div className="message-wrapper">
      <div className="message-left">
        <Navigation />
      </div>
      <div className="message-right">
        <div className="message__icon"></div>
        <span className="message__title">Your messages</span>
        <span className="message__desc">
          Send private photos and messages to a friend or group
        </span>
      </div>
    </div>
  );
}

export default Message;
