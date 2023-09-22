import Navigation from "../Navigation/Navigation";
import "./Message.scss";

function Message() {
  return (
    <div className="message-wrapper">
      <div className="message-left">
        <Navigation />
      </div>
      <div className="message-right"></div>
    </div>
  );
}

export default Message;
