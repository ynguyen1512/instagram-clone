import { Navigation } from "@mui/icons-material";
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
        <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="holder.js/171x180"
          />
          <Figure.Caption>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </Figure.Caption>
        </Figure>
      </div>
    </div>
  );
};

export default Explore;
