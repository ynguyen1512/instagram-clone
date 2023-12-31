import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AvTimerOutlinedIcon from "@mui/icons-material/AvTimerOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import "./MoreFeatures.scss";
import { useNavigate } from "react-router";

function MoreFeatures({ isMoreVisible }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/login");
  };
  return isMoreVisible ? (
    <div className="more-features-wrapper">
      <div className="more-features-buttons">
        <button className="more-features__button">
          <SettingsOutlinedIcon />
          <span>Settings</span>
        </button>
        <button className="more-features__button">
          <AvTimerOutlinedIcon />
          <span>Your Activity</span>
        </button>
        <button className="more-features__button">
          <BookmarkBorderOutlinedIcon />
          <span>Saved</span>
        </button>
        <button className="more-features__button">
          <KeyboardAltOutlinedIcon />
          <span>Keyboard</span>
        </button>
        <button className="more-features__button">
          <ModeNightOutlinedIcon />
          <span>Switch appearance</span>
        </button>
        <button className="more-features__button">
          <ErrorOutlineOutlinedIcon />
          <span>Report a problem</span>
        </button>
        <button onClick={handleNavigate} className="more-features__button">
          <span>Log out</span>
        </button>
      </div>
      {/* <button className="logout-btn"></button> */}
    </div>
  ) : null;
}

export default MoreFeatures;
