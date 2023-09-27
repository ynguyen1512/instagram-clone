import { useEffect, useState } from "react";
import Post from "./Posts/Post";
import Suggestion from "./Suggestion";
import "./Timeline.scss";
import Story from "./Stories/Story";
import Profile from "./Profile/Profile";
import photo1 from "../../assets/img/Maybach-S680.jpg";
import photo2 from "../../assets/img/Mercedes-S450.jpg";
import photo3 from "../../assets/img/Porsche_911_992_GT3.jpg";
import photo5 from "../../assets/img/audi_rs6.jpg";
import photo6 from "../../assets/img/audia7.jpg";
import photo7 from "../../assets/img/volvo s90.jpg";
import photo8 from "../../assets/img/McLaren_720S.jpg";
import photo9 from "../../assets/img/audi-r8.jpg";

import avtMer from "../../assets/img/mer-avt.jpg";
import avtAudi from "../../assets/img/audi-logo.jpg";
import avtPorsche from "../../assets/img/Porsche-Logo.png";
import avtVolvo from "../../assets/img/volvo-logo.jpg";
import Search from "../Search/Search";
import { useNavigate } from "react-router";

const Timeline = () => {
  const [posts, setPosts] = useState([
    {
      user: "mercedesbenz",
      avt: process.env.PUBLIC_URL + avtMer,
      postImage: process.env.PUBLIC_URL + photo1,
      like: 12,
      timestamp: "2d",
    },
    {
      user: "audi",
      avt: process.env.PUBLIC_URL + avtAudi,
      postImage: process.env.PUBLIC_URL + photo9,
      like: 12,
      timestamp: "2d",
    },
    {
      user: "mercedesbenz",
      avt: process.env.PUBLIC_URL + avtMer,
      postImage: process.env.PUBLIC_URL + photo2,
      like: 22,
      timestamp: "2w",
    },
    {
      user: "porsche",
      avt: process.env.PUBLIC_URL + avtPorsche,
      postImage: process.env.PUBLIC_URL + photo3,
      like: 52,
      timestamp: "2hrs",
    },
    {
      user: "audi_official",
      avt: process.env.PUBLIC_URL + avtAudi,
      postImage: process.env.PUBLIC_URL + photo5,
      like: 52,
      timestamp: "2hrs",
    },
    {
      user: "audi",
      avt: process.env.PUBLIC_URL + avtAudi,
      postImage: process.env.PUBLIC_URL + photo6,
      like: 52,
      timestamp: "2hrs",
    },
    {
      user: "volvocars",
      avt: process.env.PUBLIC_URL + avtVolvo,
      postImage: process.env.PUBLIC_URL + photo7,
      like: 52,
      timestamp: "2hrs",
    },
  ]);

  const [users, setUsers] = useState([
    {
      username: "pamyeuoi",
      avatar: process.env.PUBLIC_URL + photo6,
      desc: "from Indonesia",
    },
    {
      username: "kaity.linh",
      avatar: process.env.PUBLIC_URL + photo7,
      desc: "from Australia",
    },
    {
      username: "jason.nguyen",
      avatar: process.env.PUBLIC_URL + photo8,
      desc: "from Canada",
    },
  ]);

  const [storyUser, setStoryUser] = useState([
    {
      avatar: process.env.PUBLIC_URL + photo7,
      userName: "keen",
    },
    {
      avatar: process.env.PUBLIC_URL + photo2,
      userName: "chill",
    },
    {
      avatar: process.env.PUBLIC_URL + photo5,
      userName: "bna_1",
    },
    {
      avatar: process.env.PUBLIC_URL + photo3,
      userName: "d_prad",
    },
    {
      avatar: process.env.PUBLIC_URL + photo8,
      userName: "rookie",
    },
    {
      avatar: process.env.PUBLIC_URL + photo9,
      userName: "keen",
    },
    {
      avatar: process.env.PUBLIC_URL + photo1,
      userName: "s_club",
    },
    {
      avatar: process.env.PUBLIC_URL + photo3,
      userName: "k_en.3",
    },
    {
      avatar: process.env.PUBLIC_URL + photo7,
      userName: "watts.on",
    },
  ]);

  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [storyUserToShow, setStoryUserToShow] = useState(4);
  const navigate = useNavigate();
  const handleNavigatePage = () => {
    if (posts.user === "mercedesbenz") {
      navigate("/mercedesbenzPage");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 520) {
        setStoryUserToShow(5);
      } else {
        // For larger screens, show all storyUser
        setStoryUserToShow(storyUser.length);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial setup based on screen size
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__stories">
          {storyUser.slice(0, storyUserToShow).map((story) => (
            <Story avatar={story.avatar} userName={story.userName} />
          ))}
        </div>
        <div className="timeline__posts" onClick={handleNavigatePage}>
          {posts.map((post) => (
            <Post
              key={post.user}
              avt={post.avt}
              user={post.user}
              postImage={post.postImage}
              like={post.like}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        {isSearchVisible && (
          <Search
            setIsSearchVisible={setIsSearchVisible}
            isSearchVisible={isSearchVisible}
          />
        )}
        <Profile />
        <Suggestion users={users} setUsers={setUsers} />
      </div>
    </div>
  );
};

export default Timeline;
