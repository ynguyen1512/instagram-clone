function MoreFeatures() {
  return (
    <div className="more-features-buttons">
      <button className="more-features__button">
        <SearchIcon />
        <span>Search</span>
      </button>
      <button className="more-features__button">
        <ExploreOutlinedIcon />
        <span>Explore</span>
      </button>
      <button className="more-features__button">
        <SlowMotionVideoOutlinedIcon />
        <span>Reels</span>
      </button>
      <button className="more-features__button">
        <SendOutlinedIcon />
        <span>Messages</span>
      </button>
      <button className="more-features__button">
        <FavoriteBorderOutlinedIcon />
        <span>Notifications</span>
      </button>
      <button className="more-features__button">
        <AddBoxOutlinedIcon />
        <span>Create</span>
      </button>
    </div>
  );
}

export default MoreFeatures;
