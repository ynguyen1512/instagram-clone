import { Helmet } from "react-helmet";
import Navigation from "../Navigation/Navigation";
import Timeline from "../Timeline/Timeline";
import "./HomePage.scss";
import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const HomePage = () => {
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
