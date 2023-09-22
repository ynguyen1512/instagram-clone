import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import "./Reels.scss";

const Reels = () => {
  return (
    <div className="reels-wrapper">
      <div className="reels-video">
        <video width="320" height="240" controls>
          <source
            src="https://www.youtube.com/embed/vlDzYIIOYmM"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="reel-emotion">
        <span>
          <FavoriteBorderOutlinedIcon />
        </span>
        <span>
          <MapsUgcOutlinedIcon />
        </span>
        <span>
          <SendOutlinedIcon />
        </span>
        <span>
          <BookmarkBorderOutlinedIcon />
        </span>
      </div>
    </div>
  );
};

export default Reels;
