import { Col, Container, Image, Row } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import Figure from "react-bootstrap/Figure";
import { Helmet } from "react-helmet";

const Explore = () => {
  return (
    <div className="message-wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Explore</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="message-left">
        <Navigation isMessageView={true} />
      </div>
      {/* <div className="message-mid">
        <ListOfMess onItemClick={() => setShowChat(true)} />
      </div> */}
      <div className="message-right">
        <Container style={{ margin: "20px 0 0 140px" }}>
          <Row>
            <Col xs={6} md={4} xxl={3}>
              <Image
                src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/354248193_1591789207975129_61096347069742372_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=QgWFhCYb8QkAX-HQ2zF&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfAQ-Kypp3dwbtCoeL_bRSpV1g6ht8ctpNHt64wctgxHUg&oe=65017EF2"
                rounded
                alt="image"
                style={{ width: "200px", height: "200px" }}
              />
            </Col>
            <Col xs={6} md={4} xxl={3}>
              <Image
                src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/354248193_1591789207975129_61096347069742372_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=QgWFhCYb8QkAX-HQ2zF&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfAQ-Kypp3dwbtCoeL_bRSpV1g6ht8ctpNHt64wctgxHUg&oe=65017EF2"
                rounded
                alt="image"
                style={{ width: "200px", height: "200px" }}
              />
            </Col>
            <Col xs={6} md={4} xxl={3}>
              <Image
                src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/354248193_1591789207975129_61096347069742372_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=QgWFhCYb8QkAX-HQ2zF&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfAQ-Kypp3dwbtCoeL_bRSpV1g6ht8ctpNHt64wctgxHUg&oe=65017EF2"
                rounded
                alt="image"
                style={{ width: "200px", height: "200px" }}
              />
            </Col>
            <Col xs={6} md={4} xxl={3}>
              <Image
                src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/354248193_1591789207975129_61096347069742372_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=QgWFhCYb8QkAX-HQ2zF&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfAQ-Kypp3dwbtCoeL_bRSpV1g6ht8ctpNHt64wctgxHUg&oe=65017EF2"
                rounded
                alt="image"
                style={{ width: "200px", height: "200px" }}
              />
            </Col>
            <Col xs={6} md={4} xxl={3}>
              <Image
                src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/354248193_1591789207975129_61096347069742372_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=QgWFhCYb8QkAX-HQ2zF&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfAQ-Kypp3dwbtCoeL_bRSpV1g6ht8ctpNHt64wctgxHUg&oe=65017EF2"
                rounded
                alt="image"
                style={{ width: "200px", height: "200px" }}
              />
            </Col>
            <Col xs={6} md={4} xxl={3}>
              <Image
                src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/354248193_1591789207975129_61096347069742372_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=QgWFhCYb8QkAX-HQ2zF&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfAQ-Kypp3dwbtCoeL_bRSpV1g6ht8ctpNHt64wctgxHUg&oe=65017EF2"
                rounded
                alt="image"
                style={{ width: "200px", height: "200px" }}
              />
            </Col>
            <Col xs={6} md={4} xxl={3}>
              <Image
                src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/354248193_1591789207975129_61096347069742372_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=QgWFhCYb8QkAX-HQ2zF&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfAQ-Kypp3dwbtCoeL_bRSpV1g6ht8ctpNHt64wctgxHUg&oe=65017EF2"
                rounded
                alt="image"
                style={{ width: "200px", height: "200px" }}
              />
            </Col>
            <Col xs={6} md={4} xxl={3}>
              <Image
                src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/354248193_1591789207975129_61096347069742372_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=QgWFhCYb8QkAX-HQ2zF&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfAQ-Kypp3dwbtCoeL_bRSpV1g6ht8ctpNHt64wctgxHUg&oe=65017EF2"
                rounded
                alt="image"
                style={{ width: "200px", height: "200px" }}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4} xxl={3}>
              <Image
                src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/354248193_1591789207975129_61096347069742372_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=QgWFhCYb8QkAX-HQ2zF&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfAQ-Kypp3dwbtCoeL_bRSpV1g6ht8ctpNHt64wctgxHUg&oe=65017EF2"
                rounded
                alt="image"
                style={{ width: "200px", height: "200px" }}
              />
            </Col>
            <Col xs={6} md={4} xxl={3}>
              <Image
                src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/354248193_1591789207975129_61096347069742372_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=QgWFhCYb8QkAX-HQ2zF&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfAQ-Kypp3dwbtCoeL_bRSpV1g6ht8ctpNHt64wctgxHUg&oe=65017EF2"
                rounded
                alt="image"
                style={{ width: "200px", height: "200px" }}
              />
            </Col>
            <Col xs={6} md={4} xxl={3}>
              <Image
                src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/354248193_1591789207975129_61096347069742372_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=QgWFhCYb8QkAX-HQ2zF&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfAQ-Kypp3dwbtCoeL_bRSpV1g6ht8ctpNHt64wctgxHUg&oe=65017EF2"
                rounded
                alt="image"
                style={{ width: "200px", height: "200px" }}
              />
            </Col>
            <Col xs={6} md={4} xxl={3}>
              <Image
                src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/354248193_1591789207975129_61096347069742372_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=QgWFhCYb8QkAX-HQ2zF&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfAQ-Kypp3dwbtCoeL_bRSpV1g6ht8ctpNHt64wctgxHUg&oe=65017EF2"
                rounded
                alt="image"
                style={{ width: "200px", height: "200px" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Explore;
