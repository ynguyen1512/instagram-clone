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
      <div className="explore-right">
        <Container
          className="justify-content-center"
          style={{ marginTop: "40px" }}
        >
          <div className="img-container">
            <img
              style={{ width: "200px", height: "200px", borderRadius: "6px" }}
              src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/354248193_1591789207975129_61096347069742372_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=QgWFhCYb8QkAX-HQ2zF&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfAQ-Kypp3dwbtCoeL_bRSpV1g6ht8ctpNHt64wctgxHUg&oe=65017EF2"
            />
            <img
              style={{ width: "200px", height: "200px", borderRadius: "6px" }}
              src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/354248193_1591789207975129_61096347069742372_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=QgWFhCYb8QkAX-HQ2zF&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfAQ-Kypp3dwbtCoeL_bRSpV1g6ht8ctpNHt64wctgxHUg&oe=65017EF2"
            />
            <img
              style={{ width: "200px", height: "200px", borderRadius: "6px" }}
              src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/354248193_1591789207975129_61096347069742372_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=QgWFhCYb8QkAX-HQ2zF&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfAQ-Kypp3dwbtCoeL_bRSpV1g6ht8ctpNHt64wctgxHUg&oe=65017EF2"
            />
            <img
              style={{ width: "200px", height: "200px", borderRadius: "6px" }}
              src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/354248193_1591789207975129_61096347069742372_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=QgWFhCYb8QkAX-HQ2zF&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfAQ-Kypp3dwbtCoeL_bRSpV1g6ht8ctpNHt64wctgxHUg&oe=65017EF2"
            />
            <img
              style={{ width: "200px", height: "200px", borderRadius: "6px" }}
              src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/354248193_1591789207975129_61096347069742372_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=QgWFhCYb8QkAX-HQ2zF&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfAQ-Kypp3dwbtCoeL_bRSpV1g6ht8ctpNHt64wctgxHUg&oe=65017EF2"
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Explore;
