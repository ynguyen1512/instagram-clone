import { useState } from "react";
import Post from "./Posts/Post";
import Suggestion from "./Suggestion";
import "./Timeline.scss";
import Story from "./Stories/Story";
import Profile from "./Profile/Profile";
import photo1 from "../../assets/img/anhvaem.jpg";
import photo2 from "../../assets/img/ba.jpg";
import photo3 from "../../assets/img/bame.jpg";
import photo4 from "../../assets/img/bame2.jpg";
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
      user: "xuanph_",
      postImage: process.env.PUBLIC_URL + photo4,
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
    {
      user: "ktlinh_2410",
      postImage: process.env.PUBLIC_URL + photo8,
      like: 152,
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
      avatar:
        "https://e7.pngegg.com/pngimages/348/800/png-clipart-man-wearing-blue-shirt-illustration-computer-icons-avatar-user-login-avatar-blue-child.png",
      userName: "user1",
    },
    {
      avatar:
        "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png",
      userName: "user2",
    },
    {
      avatar:
        "https://png.pngtree.com/png-clipart/20190921/original/pngtree-user-avatar-boy-png-image_4693645.jpg",
      userName: "user3",
    },
    {
      avatar:
        "https://png.pngtree.com/png-clipart/20190921/original/pngtree-user-avatar-boy-png-image_4693645.jpg",
      userName: "user3",
    },
    {
      avatar:
        "https://png.pngtree.com/png-clipart/20190921/original/pngtree-user-avatar-boy-png-image_4693645.jpg",
      userName: "user3",
    },
    {
      avatar:
        "https://png.pngtree.com/png-clipart/20190921/original/pngtree-user-avatar-boy-png-image_4693645.jpg",
      userName: "user3",
    },
    {
      avatar:
        "https://png.pngtree.com/png-clipart/20190921/original/pngtree-user-avatar-boy-png-image_4693645.jpg",
      userName: "user3",
    },
    {
      avatar:
        "https://png.pngtree.com/png-clipart/20190921/original/pngtree-user-avatar-boy-png-image_4693645.jpg",
      userName: "user3",
    },
    {
      avatar:
        "https://png.pngtree.com/png-clipart/20190921/original/pngtree-user-avatar-boy-png-image_4693645.jpg",
      userName: "user3",
    },
  ]);

  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__stories">
          {storyUser.map((story) => (
            <Story avatar={story.avatar} userName={story.userName} />
          ))}
        </div>
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              like={post.like}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        {/* Search will be show here */}
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
