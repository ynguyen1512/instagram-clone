import { Avatar } from "@mui/material";
import "./Suggestion.scss";

const Suggestion = ({ user, avatar, desc }) => {
  return (
    <div className="suggestions">
      <div className="suggestions__title">Suggested for you</div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>{avatar}</Avatar>
            </span>
            <div className="username__info">
              <span className="username">{user}</span>
              <span className="relation">{desc}</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
