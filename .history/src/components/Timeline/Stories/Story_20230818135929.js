import { Avatar } from "@mui/material";
import "./Story.scss";

function Story() {
  return (
    <>
      <div className="timeline__stories">
        <div className="timeline__storyUser">
          <Avatar className="storyAvatar">J</Avatar>
          <div className="storyUserName">kaity.linh</div>
        </div>

        <div className="timeline__storyUser">
          <Avatar className="storyAvatar">J</Avatar>
          <div className="storyUserName">kaity.linh</div>
        </div>
        <div className="timeline__storyUser">
          <Avatar className="storyAvatar">J</Avatar>
          <div className="storyUserName">kaity.linh</div>
        </div>
        <div className="timeline__storyUser">
          <Avatar className="storyAvatar">J</Avatar>
          <div className="storyUserName">kaity.linh</div>
        </div>
      </div>
    </>
  );
}

export default Story;
