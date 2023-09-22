import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

const Reels = () => {
  return (
    <div className="reels-wrapper">
      <div className="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/vlDzYIIOYmM"
          title="YouTube video"
          style={{ width: "400px", height: "600px" }}
        ></iframe>
      </div>
      <div className="reel-emotion"></div>
    </div>
  );
};

export default Reels;
