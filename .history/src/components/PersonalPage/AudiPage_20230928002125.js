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
import avt from "../../assets/img/jason.jpg";

function AudiPage() {
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
                <span className="personal__name">ynguyen.11</span>
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
                <span>42</span> followers
              </span>
              <span className="personal__following">
                <span>79</span> following
              </span>
            </div>
            <div className="personal-row3">
              <span className="personal__name">Y Nguyen</span>
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
              <img
                alt="tab-img1"
                className="tabs__img"
                src="https://www.cnet.com/a/img/resize/fef6e6caaf32fa14adcfb6c7f38b5d6a2706457e/hub/2022/09/30/7c1ef7f1-61b1-4ab5-ac69-6788aa6ee379/2023-audi-r8-gt-rwd-045.jpg?auto=webp&width=1920"
              />
              <img
                alt="tab-img2"
                className="tabs__img"
                src="https://www.audi.com/content/dam/gbp2/company/profile/participations-and-services/1920x1080-participations-services.jpg?imwidth=719&imdensity=1"
              />
              <img
                alt="tab-img3"
                className="tabs__img"
                src="https://cdn.tuoitre.vn/thumb_w/640/2022/10/4/2023-audi-audi-r8-v10-gt-rwd-27-1664874783402564907144.jpeg"
              />
              <img
                alt="tab-img4"
                className="tabs__img"
                src="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/f83rj7/2022.png?wid=850"
              />
              <img
                alt="tab-img5"
                className="tabs__img"
                src="https://www.autopediame.com/storage/images/Audi/Audi%20A7%20Black%20Edition%201.jpg"
              />
              <img
                alt="tab-img6"
                className="tabs__img"
                src="https://www.formulaimports.com/imagetag/2572/main/l/Used-2019-Audi-RS-5-Sportback-29T-QUATTRO-BLACK-OPTIC-CARBON-FIBER-NAPPA-LEATHER-DYNAMIC-PLUS.jpg"
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

export default AudiPage;
