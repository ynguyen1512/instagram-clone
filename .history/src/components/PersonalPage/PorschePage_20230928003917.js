import { Avatar } from "@mui/material";
import "./PersonalPage.scss";
import Navigation from "../Navigation/Navigation";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import BackupTableOutlinedIcon from "@mui/icons-material/BackupTableOutlined";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import PersonPinOutlinedIcon from "@mui/icons-material/PersonPinOutlined";
import { useState } from "react";
import PhotoCameraFrontOutlinedIcon from "@mui/icons-material/PhotoCameraFrontOutlined";
import { Helmet } from "react-helmet";
import avt from "../../assets/img/Porsche-Logo.png";
import porsche1 from "../../assets/img/porsche1.jpg";
import porsche2 from "../../assets/img/porsche2.jpg";
import porsche3 from "../../assets/img/porsche3.jpg";
import porsche4 from "../../assets/img/porsche4.webp";
import porsche5 from "../../assets/img/porsche5.jpg";
import porsche6 from "../../assets/img/porsche6.jpeg";

function PorschePage() {
  const [toggleTab, setToggleTab] = useState(1);

  const handleToggleTab = (index) => {
    setToggleTab(index);
  };

  return (
    <>
      <div className="personal-wrapper">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Porsche (@porschecars)</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="personal-left">
          <Navigation />
        </div>
        <div className="personal-right">
          <Avatar className="personal__avt" src={avt} />

          <div className="personal-info-wrapper">
            <div className="personal-row1">
              <div className="personal-info">
                <span className="personal__name">porschecars</span>
                <button className="personal__edit-btn">Edit profile</button>
                <button className="personal__view-btn">View Archive</button>
              </div>
              <SettingsOutlinedIcon className="personal__setting-icon" />
            </div>
            <div className="personal-row2">
              <span className="personal__post">
                <span>8</span> posts
              </span>
              <span className="personal__followers">
                <span>7.6M</span> followers
              </span>
              <span className="personal__following">
                <span>0</span> following
              </span>
            </div>
            <div className="personal-row3">
              <span className="personal__name">Porsche Cars</span>
            </div>
          </div>
          {/* Post, saved, tagged */}
          <div className="subnav">
            <div
              className={
                toggleTab === 1 ? "subnav__posts active-tabs" : "subnav__posts"
              }
              onClick={() => handleToggleTab(1)}
            >
              <BackupTableOutlinedIcon className="subnav__icon" /> Posts
            </div>
            <div
              className={
                toggleTab === 2 ? "subnav__saved active-tabs" : "subnav__saved"
              }
              onClick={() => handleToggleTab(2)}
            >
              <TurnedInNotOutlinedIcon className="subnav__icon" /> Saved
            </div>
            <div
              className={
                toggleTab === 3
                  ? "subnav__tagged active-tabs"
                  : "subnav__tagged"
              }
              onClick={() => handleToggleTab(3)}
            >
              <PersonPinOutlinedIcon className="subnav__icon" /> Tagged
            </div>
          </div>
          <div className="personal-content-tabs">
            <div
              className={toggleTab === 1 ? "content active-content" : "content"}
            >
              <img alt="tab-img1" className="tabs__img" src={porsche1} />
              <img alt="tab-img2" className="tabs__img" src={porsche2} />
              <img alt="tab-img3" className="tabs__img" src={porsche3} />
              <img alt="tab-img4" className="tabs__img" src={porsche4} />
              <img alt="tab-img5" className="tabs__img" src={porsche5} />
              <img alt="tab-img6" className="tabs__img" src={porsche6} />
            </div>
            <div
              className={toggleTab === 2 ? "content active-content" : "content"}
            >
              <div className="content-saved">
                <span className="content__title">
                  Only you can see what you've saved
                </span>
                <button className="content__btn">+ New Collection</button>
              </div>
            </div>
            <div
              className={toggleTab === 3 ? "content active-content" : "content"}
            >
              <PhotoCameraFrontOutlinedIcon className="content__icon" />
              <span className="content__desc">No Photos</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PorschePage;
