import { Avatar } from "@mui/material";
import "./WindowChat.scss";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function WindowChat() {
  return (
    <div className="window-chat-wrapper">
      <div className="window-chat__left">
        <Avatar>Kaity</Avatar>
        <span>Kaity</span>
      </div>
      <div className="window-chat__right">
        <CallOutlinedIcon />
        <VideocamOutlinedIcon />
        <InfoOutlinedIcon />
      </div>
    </div>
  );
}

export default WindowChat;
