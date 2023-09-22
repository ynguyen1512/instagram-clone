import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import "./Reels.scss";
import Navigation from "../Navigation/Navigation";
import { Helmet } from "react-helmet";

const Reels = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Reels</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
          <iframe
            src="https://www.youtube.com/embed/I11wYV2Zxg4"
            title="YouTube video"
            className="video"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/s_bBwEbemYs"
            title="YouTube video"
            className="video"
          ></iframe>
        </div>
        <div className="reel-emotion">
          <span>
            <FavoriteBorderOutlinedIcon className="reel-emotion__item" />
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
          <span>
            <MoreHorizOutlinedIcon className="reel-emotion__item" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Reels;
