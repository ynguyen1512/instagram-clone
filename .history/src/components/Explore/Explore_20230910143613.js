import { Col, Container, Image, Row } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import Figure from "react-bootstrap/Figure";
import { Helmet } from "react-helmet";
import "./Explore.scss";

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
        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              class="w-100 shadow-1-strong rounded mb-4 img-item"
              alt="Boat on Calm Water"
            />

            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
              class="w-100 shadow-1-strong rounded mb-4 img-item"
              alt="Wintry Mountain Landscape"
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
              class="w-100 shadow-1-strong rounded mb-4 img-item"
              alt="Mountains in the Clouds"
            />

            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              class="w-100 shadow-1-strong rounded mb-4 img-item"
              alt="Boat on Calm Water"
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
              class="w-100 shadow-1-strong rounded mb-4 img-item"
              alt="Waves at Sea"
            />

            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
              class="w-100 shadow-1-strong rounded mb-4 img-item"
              alt="Yosemite National Park"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
