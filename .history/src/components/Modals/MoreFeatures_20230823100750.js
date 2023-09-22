import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AvTimerOutlinedIcon from "@mui/icons-material/AvTimerOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import "./MoreFeatures.scss";
import { Modal } from "bootstrap";

function MoreFeatures({ isMoreVisible }) {
  return (
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
          <span>Keyboard shortcuts</span>
        </button>
        <button className="more-features__button">
          <ModeNightOutlinedIcon />
          <span>Switch appearance</span>
        </button>
        <button className="more-features__button">
          <ErrorOutlineOutlinedIcon />
          <span>Report a problem</span>
        </button>
      </div>
      <button className="logout-btn">Log out</button>
    </div>
  );
}

export default MoreFeatures;
