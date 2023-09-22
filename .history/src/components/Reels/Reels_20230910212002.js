import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import "./Reels.scss";
import Navigation from "../Navigation/Navigation";

const Reels = () => {
  const iconStyles = {
    width: "60px", // Set the desired width
    height: "60px", // Set the desired height
  };
  return (
    <>
      <div className="reels-navigation">
        <Navigation />
      </div>
      <div className="reels-wrapper">
        <div className="reels-video">
          <iframe
            src="https://www.youtube.com/embed/vlDzYIIOYmM"
            title="YouTube video"
            className="video"
          ></iframe>
        </div>
        <div className="reel-emotion">
          <span>
            <FavoriteBorderOutlinedIcon
              className="reel-emotion__item"
              //   style={iconStyles}
            />
          </span>
          <span>
            <MapsUgcOutlinedIcon className="reel-emotion__item" />
          </span>
          <span>
            <SendOutlinedIcon className="reel-emotion__item" />
          </span>
          <span>
            <BookmarkBorderOutlinedIcon className="reel-emotion__item" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Reels;
