import { useEffect, useState } from "react";
import Post from "./Posts/Post";
import Suggestion from "./Suggestion";
import "./Timeline.scss";
import Story from "./Stories/Story";
import Profile from "./Profile/Profile";
import photo1 from "../../assets/img/anhvaem.jpg";
import photo2 from "../../assets/img/ba.jpg";
import photo3 from "../../assets/img/bame.jpg";
import photo5 from "../../assets/img/giadinh.jpg";
import photo6 from "../../assets/img/linhhoang.jpg";
import photo7 from "../../assets/img/me.jpg";
import photo8 from "../../assets/img/su.jpg";
import photo9 from "../../assets/img/suiu.jpg";
import Search from "../Search/Search";

const Timeline = () => {
  const [posts, setPosts] = useState([
    {
      user: "kt.katherinee",
      postImage: process.env.PUBLIC_URL + photo1,
      like: 12,
      timestamp: "2d",
    },
    {
      user: "kt.katherinee",
      postImage: process.env.PUBLIC_URL + photo9,
      like: 12,
      timestamp: "2d",
    },
    {
      user: "jason_01",
      postImage: process.env.PUBLIC_URL + photo2,
      like: 22,
      timestamp: "2w",
    },
    {
      user: "ktlinh_2410",
      postImage: process.env.PUBLIC_URL + photo3,
      like: 52,
      timestamp: "2hrs",
    },
    {
      user: "trinhng_01",
      postImage: process.env.PUBLIC_URL + photo5,
      like: 52,
      timestamp: "2hrs",
    },
    {
      user: "ktlinh_2410",
      postImage: process.env.PUBLIC_URL + photo6,
      like: 52,
      timestamp: "2hrs",
    },
    {
      user: "trinhng_01",
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
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              key={post.user}
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
        <Suggestion users={users} />
      </div>
    </div>
  );
};

export default Timeline;
