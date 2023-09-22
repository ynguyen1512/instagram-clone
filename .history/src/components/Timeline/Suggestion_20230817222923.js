import { Avatar } from "@mui/material";
import "./Suggestion.scss";

const Suggestion = () => {
  return (
    <div className="suggestions">
      <div className="suggestions__title">Suggestions for you</div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
          </div>
          <div className="follow__button">Follow</div>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
