function MoreFeatures() {
  return (
    <div className="more-features-wrapper">
      <div className="sidenav__buttons">
        <button onClick={() => handleOnClick()} className="sidenav__button">
          <HomeIcon />
          <span>Home</span>
        </button>
        <button className="sidenav__button">
          <SearchIcon />
          <span>Search</span>
        </button>
        <button className="sidenav__button">
          <ExploreOutlinedIcon />
          <span>Explore</span>
        </button>
        <button className="sidenav__button">
          <SlowMotionVideoOutlinedIcon />
          <span>Reels</span>
        </button>
        <button className="sidenav__button">
          <SendOutlinedIcon />
          <span>Messages</span>
        </button>
        <button className="sidenav__button">
          <FavoriteBorderOutlinedIcon />
          <span>Notifications</span>
        </button>
        <button className="sidenav__button">
          <AddBoxOutlinedIcon />
          <span>Create</span>
        </button>
      </div>
    </div>
  );
}

export default MoreFeatures;
