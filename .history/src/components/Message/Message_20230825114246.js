import { Helmet } from "react-helmet";
import Navigation from "../Navigation/Navigation";
import ListOfMess from "./ListOfMess";
import "./Message.scss";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";

function Message() {
  return (
    <div className="message-wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Instagram - Chat</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="message-left">
        <Navigation isMessageView={true} />
      </div>
      <div className="message-mid">
        <ListOfMess />
      </div>
      <div className="message-right">
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
