import Navigation from "../Navigation/Navigation";
import ListOfMess from "./ListOfMess";
import "./Message.scss";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";

function Message() {
  return (
    <div className="message-wrapper">
      <div className="message-left">
        <Navigation isMessageView={true} />
      </div>
      <div className="message-mid">
        <ListOfMess />
      </div>
      <div className="message-right d-flex p-2">
        {/* <div className="message__icon"> */}
        <MailOutlinedIcon className="message__icon" />
        {/* </div> */}
        <span className="message__title">Your messages</span>
        <span className="message__desc">
          Send private photos and messages to a friend or group
        </span>
      </div>
    </div>
  );
}

export default Message;
