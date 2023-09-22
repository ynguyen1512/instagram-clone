import Navigation from "../Navigation/Navigation";
import ListOfMess from "./ListOfMess";
import "./Message.scss";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";

function Message() {
  return (
    <div className="message-wrapper d-flex align-items-center justify-content-center">
      <div className="message-left">
        <Navigation isMessageView={true} />
      </div>
      <div className="message-mid">
        <ListOfMess />
      </div>
      <div className="message-right p-2 m-2 bg-info text-white shadow rounded-2">
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
