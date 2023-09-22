import { Avatar } from "@mui/material";
import "./Profile.scss";
import { SpatialAudioRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import avt from "../../../assets/img/jason.jpg";

function Profile() {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/personal");
  };
  return (
    <div className="profile">
      <div className="profile__wrapper">
        <span className="profile__avt" onClick={() => handleOnClick()}>
          <Avatar src={avt} />
        </span>
        <div className="profile__info">
          <span className="profile__userName">ynguyen.11</span>
          <span className="profile__desc">Y Nguyen</span>
        </div>
      </div>
      <button className="switch-btn">Switch</button>
    </div>
  );
}

export default Profile;
