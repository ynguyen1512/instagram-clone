import { Avatar } from "@mui/material";
import "./Story.scss";

function Story({ avatar, userName }) {
  return (
    <>
      <div className="timeline__stories">
        <div className="timeline__storyUser">
          <Avatar className="storyAvatar">{avatar}</Avatar>
          <div className="storyUserName">{userName}</div>
        </div>
      </div>
    </>
  );
}

export default Story;
