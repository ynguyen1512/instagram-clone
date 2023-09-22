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
        <Container style={{ margin: "30px 0 0 100px" }}>
          <Row>
            <Col xs={6} md={4} xxl={3}>
              <Image src="holder.js/171x180" rounded alt="image" />
            </Col>
            <Col xs={6} md={4} xxl={3}>
              <Image src="holder.js/171x180" roundedCircle alt="image" />
            </Col>
            <Col xs={6} md={4} xxl={3}>
              <Image src="holder.js/171x180" thumbnail alt="image" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Explore;
