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
import avt from "../../assets/img/mer-avt.jpg";
import mer1 from "../../assets/img/mer1.avif";
import mer2 from "../../assets/img/mer2.jpg";
import mer3 from "../../assets/img/mer3.jpg";
import mer4 from "../../assets/img/mer4.avif";
import mer5 from "../../assets/img/mer5.jpg";
import mer6 from "../../assets/img/mer6.webp";

function MercedesPage() {
  const [toggleTab, setToggleTab] = useState(1);

  const handleToggleTab = (index) => {
    setToggleTab(index);
  };

  return (
    <>
      <div className="personal-wrapper">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Y Nguyen (@ynguyen.11)</title>
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
                <span className="personal__name">mercedesbenz</span>
                <button className="personal__edit-btn">Edit profile</button>
                <button className="personal__view-btn">View Archive</button>
              </div>
              <SettingsOutlinedIcon className="personal__setting-icon" />
            </div>
            <div className="personal-row2">
              <span className="personal__post">
                <span>0</span> posts
              </span>
              <span className="personal__followers">
                <span>4.1M</span> followers
              </span>
              <span className="personal__following">
                <span>79</span> following
              </span>
            </div>
            <div className="personal-row3">
              <span className="personal__name">Mercedes Benz</span>
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
              <img alt="tab-img1" className="tabs__img" src={mer1} />
              <img
                alt="tab-img2"
                className="tabs__img"
                src="https://www.mercedes-benz.ie/content/ireland/en/passengercars/_jcr_content/root/responsivegrid/simple_stage.component.damq1.3385018336166.jpg/mercedes-amg-gt-c192-pad-stage-3840x3840-06-2023.jpg"
              />
              <img
                alt="tab-img3"
                className="tabs__img"
                src="https://car-images.bauersecure.com/wp-images/13349/80-mercedes-amg-gt63-e-performance-hero.jpg"
              />
              <img
                alt="tab-img4"
                className="tabs__img"
                src="https://www.topgear.com/sites/default/files/2023/07/1%20Mercedes%20CLE%20Coupe.jpg"
              />
              <img
                alt="tab-img5"
                className="tabs__img"
                src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202302/202302230723-main-sixteen_nine.jpg?size=948:533"
              />
              <img
                alt="tab-img6"
                className="tabs__img"
                src="https://www.carscoops.com/wp-content/uploads/2023/02/2022-Mercedes-CLS-1024x576.jpg"
              />
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

export default MercedesPage;
