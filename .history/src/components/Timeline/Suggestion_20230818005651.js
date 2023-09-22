import { Avatar } from "@mui/material";
import "./Suggestion.scss";

const Suggestion = ({ user, avatar, desc }) => {
  return (
    <div className="suggestions">
      <div className="suggestions__title">Suggested for you</div>
      <div className="suggestions__usernames">
        {user.map((user) => (
          <div key={user.username} className="suggestions__username">
            <div className="username__left">
              <span className="avatar">
                <Avatar src={user.avatar} alt={user.username} />
              </span>
              <div className="username__info">
                <span className="username">{user.username}</span>
                <span className="relation">{user.desc}</span>
              </div>
            </div>
            <button className="follow__button">Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestion;
