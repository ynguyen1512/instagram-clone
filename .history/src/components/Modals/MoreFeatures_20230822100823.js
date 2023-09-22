import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

function MoreFeatures() {
  return (
    <div className="more-features-buttons">
      <button className="more-features__button">
        <SettingsOutlinedIcon />
        <span>Settings</span>
      </button>
      <button className="more-features__button">
        <ExploreOutlinedIcon />
        <span>Your Activity</span>
      </button>
      <button className="more-features__button">
        <SlowMotionVideoOutlinedIcon />
        <span>Saved</span>
      </button>
      <button className="more-features__button">
        <SendOutlinedIcon />
        <span>Keyboard shortcuts</span>
      </button>
      <button className="more-features__button">
        <FavoriteBorderOutlinedIcon />
        <span>Switch appearance</span>
      </button>
      <button className="more-features__button">
        <AddBoxOutlinedIcon />
        <span>Report a problem</span>
      </button>
    </div>
  );
}

export default MoreFeatures;
