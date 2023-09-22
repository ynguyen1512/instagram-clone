import { Col, Container, Image, Row } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import Figure from "react-bootstrap/Figure";
import { Helmet } from "react-helmet";
import "./Explore.scss";
import ModeCommentRoundedIcon from "@mui/icons-material/ModeCommentRounded";
import pamela from "../../assets/img/pamela.jpg";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";

const Explore = () => {
  return (
    <div className="explore-wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Explore</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="explore-left">
        <Navigation isMessageView={true} />
      </div>
      {/* <div className="message-mid">
        <ListOfMess onItemClick={() => setShowChat(true)} />
      </div> */}
      <div className="explore-right mx-auto">
        <div className="explore-img-wrapper">
          <div className="explore-img__row">
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <div className="image-container" key={index}>
                  <img src={pamela} />
                  <div className="hover-icons">
                    <FavoriteOutlinedIcon className="image-icon" />
                    <ModeCommentRoundedIcon className="image-icon" />
                  </div>
                </div>
              ))}
          </div>
          <div className="explore-img__row">
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <div className="image-container" key={index}>
                  <img src={pamela} />
                  <div className="hover-icons">
                    <FavoriteOutlinedIcon className="image-icon" />
                    <ModeCommentRoundedIcon className="image-icon" />
                  </div>
                </div>
              ))}
          </div>
          <div className="explore-img__row">
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <div className="image-container" key={index}>
                  <img src={pamela} />
                  <div className="hover-icons">
                    <FavoriteOutlinedIcon className="image-icon" />
                    <ModeCommentRoundedIcon className="image-icon" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
