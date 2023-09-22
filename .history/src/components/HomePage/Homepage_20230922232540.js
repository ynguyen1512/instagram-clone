import { Helmet } from "react-helmet";
import Navigation from "../Navigation/Navigation";
import Timeline from "../Timeline/Timeline";
import "./HomePage.scss";
import { useState } from "react";
import Search from "../Search/Search";

const HomePage = () => {
  const [showSearch, setShowSearch] = useState(false);
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
      {showSearch && <Search />}
    </div>
  );
};

export default HomePage;
