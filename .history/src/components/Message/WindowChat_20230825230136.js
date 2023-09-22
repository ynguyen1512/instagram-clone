import { Avatar } from "@mui/material";
import "./WindowChat.scss";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function WindowChat() {
  return (
    <div className="window-chat-wrapper">
      <div className="window-chat__left">
        <Avatar className="window-chat__icon">Kaity</Avatar>
        <span>Kaity</span>
      </div>
      <div className="window-chat__right">
        <CallOutlinedIcon className="window-chat__icon" />
        <VideocamOutlinedIcon className="window-chat__icon" />
        <InfoOutlinedIcon className="window-chat__icon" />
      </div>
    </div>
  );
}

export default WindowChat;
