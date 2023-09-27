import { Avatar } from "@mui/material";
import "./Post.scss";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import { useState } from "react";
import { useNavigate } from "react-router";
import PersonalPage from "../../PersonalPage/PersonalPage";
const Post = ({ user, postImage, like, timestamp, avt }) => {
  const [isHoveredLike, setIsHoveredLike] = useState(false);
  const [isHoveredSave, setIsHoveredSave] = useState(false);
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/personal");
  };

  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor" onClick={handleOnClick}>
          <Avatar className="post__headerAvt" src={avt} />
          <PersonalPage />
          {user} • <span>{timestamp}</span>
        </div>

        <MoreHorizOutlinedIcon />
      </div>
      <div className="post__image">
        <img src={postImage} alt="post-img" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            {isHoveredLike ? (
              <FavoriteOutlinedIcon
                style={{ color: "red" }}
                className="postIcon favoriteIcon"
                onClick={() => setIsHoveredLike(!isHoveredLike)}
              />
            ) : (
              <FavoriteBorderOutlinedIcon
                className="postIcon favoriteIcon"
                onClick={() => setIsHoveredLike(!isHoveredLike)}
              />
            )}

            <ModeCommentOutlinedIcon className="postIcon" />
            <SendOutlinedIcon className="postIcon" />
          </div>
          <div className="post__iconSave">
            {isHoveredSave ? (
              <BookmarkOutlinedIcon
                className="postIcon"
                onClick={() => setIsHoveredSave(!isHoveredSave)}
              />
            ) : (
              <BookmarkBorderOutlinedIcon
                className="postIcon"
                onClick={() => setIsHoveredSave(!isHoveredSave)}
              />
            )}
          </div>
        </div>
        Liked by {like} people.
      </div>
    </div>
  );
};

export default Post;
