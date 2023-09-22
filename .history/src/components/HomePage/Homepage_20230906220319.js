import { Helmet } from "react-helmet";
import Navigation from "../Navigation/Navigation";
import Timeline from "../Timeline/Timeline";
import "./HomePage.scss";
import { useState } from "react";

const HomePage = () => {
  const [openSignup, setOpenSignup] = useState(false);
  const [openSignin, setOpenSignin] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="homepage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Instagram</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="homepage__nav">
        <Navigation />
      </div>
      <div className="homepage__timeline">
        <Timeline />
      </div>
    </div>
  );
};

export default HomePage;
