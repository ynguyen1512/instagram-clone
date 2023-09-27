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
import avt from "../../assets/img/volvo-logo.jpg";
import volvo1 from "../../assets/img/volvo1.jpg";
import volvo2 from "../../assets/img/volvo2.webp";
import volvo3 from "../../assets/img/volvo3.jpg";
import volvo4 from "../../assets/img/volvo4.jpg";
import volvo5 from "../../assets/img/volvo5.jpg";
import volvo6 from "../../assets/img/volvo6.jpg";

function VolvoPage() {
  const [toggleTab, setToggleTab] = useState(1);

  const handleToggleTab = (index) => {
    setToggleTab(index);
  };

  return (
    <>
      <div className="personal-wrapper">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Volvo (@volvocars)</title>
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
                <span className="personal__name">volvocars</span>
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
                <span>20M</span> followers
              </span>
              <span className="personal__following">
                <span>0</span> following
              </span>
            </div>
            <div className="personal-row3">
              <span className="personal__name">Volvo Cars</span>
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
              <img alt="tab-img1" className="tabs__img" src={volvo1} />
              <img alt="tab-img2" className="tabs__img" src={volvo2} />
              <img alt="tab-img3" className="tabs__img" src={volvo3} />
              <img alt="tab-img4" className="tabs__img" src={volvo4} />
              <img alt="tab-img5" className="tabs__img" src={volvo5} />
              <img alt="tab-img6" className="tabs__img" src={volvo6} />
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

export default VolvoPage;
